import assign from 'lodash/assign';

export default function combine(...sources) {
    return assign({}, ...sources);
}
