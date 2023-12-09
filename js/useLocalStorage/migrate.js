import { valueType } from './valueType';

import reduce from 'lodash/reduce';
import has from 'lodash/has';
import keys from 'lodash/keys';
import union from 'lodash/union';
import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';

export function migrate(value, defaultValue) {
    const type = valueType(value);
    const defaultType = valueType(defaultValue);
    if (type === defaultType) {
        if (type === 'object') {
            const allKeys = union(keys(value), keys(defaultValue));
            value = reduce(allKeys, (value, key) => {
                if (key.match(/^\$/))
                    return value;

                const { [key]: d } = defaultValue;
                if (has(value, key) && isNil(d)) {
                    value = { ...value };
                    delete value[key];
                    return value;
                }

                const { [key]: v } = value;
                const { [`$${key}`]: $d } = defaultValue;
                const k = isFunction($d) ? $d(v, d) : migrate(v, d);
                return v === k ? value : { ...value, [key]: k };
            }, value);
        }
        return value;
    }

    return defaultValue;
}
