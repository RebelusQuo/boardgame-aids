import { parse as parseMnt } from './parser';

import isNull from 'lodash/isNull';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';

export function parse(text, options = {}) {
    const { top = 'any' } = options
    checkTop(top);

    const data = parseMnt(text);
    return topValue(top, data);
}

function checkTop(top) {
    if (!/^(any|list|dict|str)$/.test(top))
        throw new Error(`Invalid top option "${top}"`);
}

function topValue(top, data) {
    const [ok, no] = [Symbol(), Symbol()];
    const behavior = {
        any:  { list: ok, dict: ok, str: ok, null: ok },
        list: { list: ok, dict: no, str: no, null: () => []   },
        dict: { list: no, dict: ok, str: no, null: () => ({}) },
        str:  { list: no, dict: no, str: ok, null: () => ''   },
    };

    const value = behavior[top][type(data)];
    if (value === no)
        throw new NestedTextError({
            list: 'Root content must be a list, starting with a dash (-).',
            dict: 'Root content must be a dictionary, starting with a key.',
            str:  'Root content must be a string, starting with a greater-than sign (>).',
        }[top]);

    return value === ok ? data : value();

    function type(value) {
        return isNull(value) ? 'null'
            : isString(value) ? 'str'
            : isArray(value) ? 'list'
            : 'dict';
    }
}

export class NestedTextError extends Error {
    constructor(...args) {
        super(...args);

        if (Error.captureStackTrace) { // For V8
            Error.captureStackTrace(this, NestedTextError);
        }
    }
}

export default { parse };
