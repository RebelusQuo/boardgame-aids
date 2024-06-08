import filter from 'lodash/filter';
import some from 'lodash/some';
import size from 'lodash/size';
import has from 'lodash/has';
import includes from 'lodash/includes';
import sumBy from 'lodash/sumBy';
import groupIntoArrayBy from '../../lodash/groupIntoArrayBy';
import inRange from 'lodash/inRange';

export function validate(settings, leaders) {
    const { sources, difficulty, shuffle, players, choices } = settings;
    const { solo } = players;

    leaders = filter(leaders, ({ Source }) => includes(sources, Source));

    if (solo) {
        const rivals = filter(leaders, leader => has(leader, 'Rival'));
        if (solo === 'rivals') {
            const issue = size(rivals) < 2;
            return [issue ? null : { rivals }, issue];
        }
    }

    leaders = filter(leaders, ({ Difficulty }) => inRange(~~Difficulty, difficulty.min, difficulty.max + 1));

    let issue;
    if (shuffle === 'house') {
        leaders = groupIntoArrayBy(leaders, 'House');
        issue = !(choices.less
            ? sum_at_least(leaders, choices.n - 1) >= players.n && any_at_least(leaders, choices.n)
            : sum_at_least(leaders, choices.n) >= players.n
        );
    }
    else {
        const leaders_n = players.n * choices.n - (choices.less ? players.n - 1 : 0);
        issue = !(size(leaders) >= leaders_n);
    }

    return [issue ? null : leaders, issue];
}

function sum_at_least(groups, n) {
    return sumBy(groups, group => size(group) >= n) + 0;
}

function any_at_least(groups, n) {
    return some(groups, group => size(group) >= n);
}
