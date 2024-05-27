import includes from 'lodash/includes';

export default function oneOf(target, collection) {
    return includes(collection, target);
}
