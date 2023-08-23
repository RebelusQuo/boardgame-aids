import { Field } from '../styles/Field';
import { useLocalStorage } from '../useLocalStorage';

import { readFileSync } from 'fs';
import Mnt from '../mnt';

import map from 'lodash/map';
import times from 'lodash/times';
import includes from 'lodash/includes';
import clamp from 'lodash/clamp';

const leaders = Mnt.parse(readFileSync(__dirname + '/leaders.mnt', 'utf8'));
console.log(leaders);

const defaults = {
    game: ['Imperium', 'Ix'],
    players: { n: 4, solo: null },
    shuffle: 'free',
    difficulty: { min: 1, max: 4 },
    choices: 2,
    choice: true,
    spoiler: true,
};

export default function DuneImperium() {
    // Todo: versioning based on `defaults`
    const [state, setState] = useLocalStorage('dune-imperium', defaults);

    function onPlayersChange(selection) {
        const n = ~~selection || 1;
        const solo = includes(['rivals'], selection) ? selection : null;
        setState({ ...state, players: { n, solo } });
    }

    function onShuffleChange(shuffle) {
        setState({ ...state, shuffle });
    }

    function difficultyIsChecked(i) {
        const { min, max } = state.difficulty;
        return min <= i && max >= i;
    }

    function onDifficultyChange(i) {
        const { min, max } = state.difficulty;
        const [min_d, max_d] = [i - min, i - max];
        const [limit, value, delta = 0] =
            min !== max || min_d !== 0 && max_d !== 0
                ? min_d ===  0 ? ['min', min,  1]
                : min_d === -1 ? ['min', min, -1]
                : max_d ===  0 ? ['max', max, -1]
                : max_d ===  1 ? ['max', max,  1]
                : [] : [];
        if (delta) {
            setState({ ...state, difficulty: { ...state.difficulty,
                [limit]: clamp(value + delta,
                    limit !== 'min' ? min : 1,
                    limit !== 'max' ? max : 4
                )
            }});
        }
    }

    function onChoicesChange(choices) {
        setState({ ...state, choices });
    }

    function onChoiceChange(choice) {
        setState({ ...state, choice });
    }

    function onSpoilerChange(spoiler) {
        setState({ ...state, spoiler })
    }

    return <>
        {/* game select */}
        <Field>
            <label>Number of Players:</label>
            <select value={state.players.solo || state.players.n} onChange={e => onPlayersChange(e.target.value)}>
                <option value="4">4P</option>
                <option value="3">3P</option>
                <option value="2">2P</option>
                <option value="1">Solo P + Rivals</option>
                <option value="rivals">Solo Rivals</option>
            </select>
        </Field>
        <Field>
            <label>Shuffle:</label>
            <select value={state.shuffle} onChange={e => onShuffleChange(e.target.value)}>
                <option value="free">Freely</option>
                <option value="house">By House</option>
            </select>
        </Field>
        <Field>
            <label>Difficulty:</label>
            1
            {map(times(4, i => i+1), i =>
                <input type="checkbox" key={i}
                    checked={difficultyIsChecked(i)}
                    onChange={() => onDifficultyChange(i)}
                />
            )}
            4
        </Field>
        <Field>
            <label>Choices:</label>
            <input size="1" value={state.choices} onChange={e => onChoicesChange(~~e.target.value)} />
            <label><input type="checkbox" checked={state.choice} onChange={e => onChoiceChange(e.target.changed)} /> exact</label>
            <label><input type="checkbox" checked={state.choice} onChange={e => onChoiceChange(e.target.changed)} /> 2 {'>='} choices?</label>
        </Field>
        <Field>
            <label class="indent"><input type="checkbox" checked={state.spoiler} onChange={e => onSpoilerChange(e.target.changed)} /> Hide with spoiler</label>
        </Field>
    </>;
}
