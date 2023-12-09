import { useState } from 'react';

import { migrate } from './migrate';

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
                const migrated = migrate(value, defaultValue);
                if (value !== migrated) {
                    localStorage.setItem(key, serialize(migrated));
                    value = migrated;
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
