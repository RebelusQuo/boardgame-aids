import { useState } from 'react';

import isNil from 'lodash/isNil';

export function useLocalStorage(key, defaultValue = null,
    deserialize = JSON.parse,
    serialize = JSON.stringify)
{
    const [value, setStoredValue] = useState(() => {
        const storedValue = localStorage.getItem(key);

        if (!isNil(storedValue)) {
            try {
                return deserialize(storedValue);
            }
            catch {
                return storedValue;
            }
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
