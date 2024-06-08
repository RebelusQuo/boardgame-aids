import each from 'lodash/each';
import has from 'lodash/has';
import size from 'lodash/size';
import _iteratee from 'lodash/iteratee';

export default function groupIntoArrayBy(collection, iteratee) {
    iteratee = _iteratee(iteratee);

    const result = [], groups = {};
    each(collection, value => {
        const key = iteratee(value);
        const group = has(groups, key) ? groups[key]
            : (result[size(result)] = groups[key] = []);
        group.push(value);
    });

    return result;
}
