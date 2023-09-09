import { useState } from 'react';

import valueType from './valueType';

import isNil from 'lodash/isNil';

export function useLocalStorage(key, defaultValue = null,
    deserialize = JSON.parse,
    serialize = JSON.stringify)
{
    const [value, setStoredValue] = useState(() => {
        const storedValue = localStorage.getItem(key);

        if (!isNil(storedValue)) {
            let value;
            try {
                value = deserialize(storedValue);
            }
            catch {
                value = storedValue;
            }

            if (!isNil(defaultValue)) {
                const harmonized = harmonize(value, defaultValue);
                if (value !== harmonized) {
                    localStorage.setItem(key, serialize(harmonized));
                    value = harmonized;
                }
            }

            return value;
        }

        if (!isNil(defaultValue)) {
            localStorage.setItem(key, serialize(defaultValue));
        }

        return defaultValue;
    });

    function setValue(newValue) {
        try {
            localStorage.setItem(key, serialize(newValue));
        }
        catch {
            throw new Error(`Failed to set ${key} in local storage.`);
        }

        setStoredValue(newValue);
    }

    return [value, setValue];
}

function harmonize(value, defaultValue) {
    // object
    //   process each key
    //   special handling if $key exists
    // array
    // string
    // number
    // bool
    //   leave other unchanged if type is the same
}
