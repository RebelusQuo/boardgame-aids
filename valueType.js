import baseGetTag from 'lodash/_baseGetTag';
import getPrototype from 'lodash/_getPrototype';
import isLength from 'lodash/isLength';

const hasOwnProperty = Object.prototype.hasOwnProperty;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
const funcToString = Function.prototype.toString;

const isArgumentsIdentifiedByTag = baseGetTag(function() { return arguments; }()) === '[object Arguments]';

const objectCtorString = funcToString.call(Object);

export default function valueType(value) {
    switch (value) {
        case null: return 'null';
        case undefined: return 'undefined';
        case true: case false: return 'boolean';
    }

    const type = typeof value;
    switch (type) {
        case 'number':
        case 'string':
        case 'symbol':
        case 'function':
            return type;
    }

    if (Array.isArray(value)) return 'array';

    if (type === 'object') {
        if (!isArgumentsIdentifiedByTag && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee'))
            return 'arguments';

        const tag = baseGetTag(value);
        switch (tag) {
            // Plain object
            case '[object Object]':
                if (baseIsPlainObject(value)) return 'plainObject';
                else break;
            // Function. Safari 9 gives 'object' for `typeof` so we use the tag as well.
            case '[object Function]':
            case '[object GeneratorFunction]':
            case '[object AsyncFunction]':
            case '[object Proxy]':
                return 'function';
            // Specialized array
            case '[object Arguments]':
                if (isArgumentsIdentifiedByTag) return 'arguments';
                else break;
            case '[object ArrayBuffer]': return 'arrayBuffer';
            case '[object Float32Array]': case '[object Float64Array]': case '[object Uint8ClampedArray]':
            case '[object Uint8Array]': case '[object Uint16Array]': case '[object Uint32Array]':
            case '[object Int8Array]': case '[object Int16Array]': case '[object Int32Array]':
                if (isLength(value.length)) return 'typedArray';
                else break;
            // Common object type
            case '[object Date]': return 'date';
            case '[object RegExp]': return 'regexp';
            case '[object Error]':
            case '[object DOMException]':
                return 'error';
            // Primitive object
            case '[object Boolean]': return 'boolean';
            case '[object Number]': return 'number';
            case '[object String]': return 'string';
            case '[object Symbol]': return 'symbol';
        }
        // A non-plain object with `message` and `name` is also an Error.
        if (typeof value.message === 'string' && typeof value.name === 'string') return 'error';
        // Likely a DOM element.
        if (value.nodeType === 1) return 'domElement';
    }

    return 'object';

    function baseIsPlainObject(value) {
        const proto = getPrototype(value);
        if (proto === null) return true;
        const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
}
