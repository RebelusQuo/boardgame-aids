import baseGetTag from 'lodash/_baseGetTag';
import getPrototype from 'lodash/_getPrototype';

const hasOwnProperty = Object.prototype.hasOwnProperty;
const funcToString = Function.prototype.toString;

const objectCtorString = funcToString.call(Object);

export function valueType(value) {
    if (Array.isArray(value)) return 'array';

    switch (value) {
        case null: case undefined: return 'nil';
        case true: case false: return 'boolean';
    }

    const type = typeof value;
    switch (type) {
        case 'number':
        case 'string':
        case 'symbol':
            return type;
    }

    if (type === 'object' && baseGetTag(value) === '[object Object]' && baseIsPlainObject(value))
        return 'object';

    return null;

    function baseIsPlainObject(value) {
        const proto = getPrototype(value);
        if (proto === null) return true;
        const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
}
