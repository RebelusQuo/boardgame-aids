import { useMemo } from 'react';
import { useLocalStorage } from '../../useLocalStorage';

import {
    Button,
    Field,
    NumberInput,
} from '../../gui';

import map from 'lodash/map';
import times from 'lodash/times';
import includes from 'lodash/includes';
import remove from 'lodash/remove';
import clamp from 'lodash/clamp';
import isEmpty from 'lodash/isEmpty';

import { readFileSync } from 'fs';
import Mnt from '../../mnt';

const leaders = Mnt.parse(readFileSync(__dirname + '/leaders.mnt', 'utf8'));

import { validate/* , distribute */ } from './logic';

const defaults = {
    sources: ['Imperium', 'Ix'],
    players: { n: 4, solo: null },
    shuffle: 'free',
    difficulty: { min: 1, max: 4 },
    choices: { n: 2, less: false },
    spoiler: true,
};

export default function DuneImperium() {
    const [state, setState] = useLocalStorage('dune-imperium', defaults);
    const [prepared, issue] = useMemo(() => validate(state, leaders), [state]);
    const solo = state.players.n === 1;

    function onDistribute() {}

    return <>
        <SourcesField sources={state.sources} onChange={sources => setState({ ...state, sources })} />
        <DifficultyField difficulty={state.difficulty} onChange={difficulty => setState({ ...state, difficulty })} />
        <ShuffleField solo={solo} shuffle={state.shuffle} onChange={shuffle => setState({ ...state, shuffle })} />
        <PlayersField players={state.players} onChange={players => setState({ ...state, players })} />
        <ChoicesField solo={solo} choices={state.choices} onChange={choices => setState({ ...state, choices })} />
        {!solo &&
        <SpoilerField checked={state.spoiler} onChange={spoiler => setState({ ...state, spoiler})} />
        }
        <Button disabled={issue} onClick={onDistribute}>Distribute</Button>
    </>;
}

function SourcesField({ sources, onChange }) {
    return <Field>
        <Field.Label>Sources</Field.Label>
        <label><input type="checkbox" checked={true} readOnly={true} disabled={true} />Imperium</label>
        <label><input type="checkbox" checked={includes(sources, 'Ix')} onChange={() => toggle('Ix')} />Rise of Ix</label>
    </Field>;

    function toggle(source) {
        sources = [...sources];
        const removed = remove(sources, x => x === source);
        isEmpty(removed) && (sources = [...sources, source]);
        onChange(sources);
    }
}

function DifficultyField({ difficulty, onChange }) {
    return <Field>
        <Field.Label>Difficulty:</Field.Label>
        1
        {map(times(4, i => i+1), i =>
            <input type="checkbox" key={i}
                checked={isChecked(i)}
                onChange={() => onInternalChange(i)}
            />
        )}
        4
    </Field>;

    function isChecked(i) {
        const { min, max } = difficulty;
        return min <= i && max >= i;
    }

    function onInternalChange(i) {
        const { min, max } = difficulty;
        const [min_d, max_d] = [i - min, i - max];
        const [limit, value, delta = 0] =
            min !== max || min_d !== 0 && max_d !== 0
                ? min_d ===  0 ? ['min', min,  1]
                : min_d === -1 ? ['min', min, -1]
                : max_d ===  0 ? ['max', max, -1]
                : max_d ===  1 ? ['max', max,  1]
                : [] : [];
        if (delta) {
            onChange({ ...difficulty,
                [limit]: clamp(value + delta,
                    limit !== 'min' ? min : 1,
                    limit !== 'max' ? max : 4
                )
            });
        }
    }
}

function ShuffleField({ solo, shuffle, onChange }) {
    return <Field>
        <Field.Label>Shuffle:</Field.Label>
        <select disabled={solo} value={solo ? 'free' : shuffle} onChange={e => onChange(e.target.value)}>
            <option value="free">Freely</option>
            <option value="house">By House</option>
        </select>
    </Field>;
}

function PlayersField({ players, onChange }) {
    return <Field>
        <Field.Label>Number of Players:</Field.Label>
        <select value={players.solo || players.n} onChange={e => onInternalChange(e.target.value)}>
            <option value="4">4P</option>
            <option value="3">3P</option>
            <option value="2">2P</option>
            <option value="player_rivals">Solo P + Rivals</option>
            <option value="rivals">Solo Rivals</option>
        </select>
    </Field>;

    function onInternalChange(selection) {
        const n = ~~selection || 1;
        const solo_modes = ['player_rivals', 'rivals'];
        const solo = includes(solo_modes, selection) ? selection : null;
        onChange({ n, solo });
    }
}

function ChoicesField({ solo, choices, onChange }) {
    return <Field>
        <Field.Label>Choices:</Field.Label>
        <NumberInput size="2" min="1" value={choices.n} onChange={e => onChoicesChange(~~e.target.value)} />
        <label>
            <input type="checkbox" checked={choices.less} disabled={solo || choices.n <= 1} onChange={e => onLessChange(e.target.checked)}
            />allow one less for some
        </label>
    </Field>;

    function onChoicesChange(n) {
        onChange({
            n: n >= 1 ? n : 1,
            less: n > 1 && choices.less,
        });
    }

    function onLessChange(less) {
        onChange({ ...choices, less: choices.n > 1 && less });
    }
}

function SpoilerField({ checked, onChange }) {
    return <Field>
        <Field.IndentLabel><input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />Hide with spoiler</Field.IndentLabel>
    </Field>;
}
