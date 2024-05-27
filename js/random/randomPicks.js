import { random as defaultRandom } from './random';

import assign from 'lodash/assign';
import isNil from 'lodash/isNil';

export const randomPicks = { take, create, restore, };

function take(n, m, random = defaultRandom) {
    return create(n, random)(m);
}

function create(n, random = defaultRandom) {
    return createPicks(n, null, random);
}

function restore(data, random = defaultRandom) {
    const [k, entries] = data;
    return createPicks(k, entries, random);
}

function createPicks(k, entries, random) {
    const swap = new Map(entries);

    function pick(m) {
        if (isNil(m) || m > k) m = k;

        return [...next()];

        function* next() {
            const end = k - m;
            while (k > end) {
                const i = random(k);
                const j = k - 1;

                yield [k, swapOrIndex(swap, i)];
                swap.set(i, swapOrIndex(swap, j));
                swap.delete(j);

                k -= 1;
            }

            function swapOrIndex(swap, i) {
                return swap.has(i) ? swap.get(i) : i;
            }
        }
    }

    function persist() {
        return [k, [...swap.entries()]];
    }

    return assign(pick, { persist });
}
