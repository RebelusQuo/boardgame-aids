import { Suspense, lazy, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

import map from 'lodash/map';
import find from 'lodash/find';
import kebabCase from 'lodash/kebabCase'

const testDefaults = {
    outer: {
        inner: [1, 2],
    },
    text: "lorem",
    number: 13,
    truth: true,
};

const aids = [
    { name: 'Dune Imperium', Component: lazy(() => import('./dune-imperium')) }
];

export function App() {
    const [value, setValue] = useLocalStorage('test', testDefaults);

    const [selectedAid, setSelectedAid] = useLocalStorage('selected-aid', '');
    const aid = find(aids, { name: selectedAid });

    return <>
        <select value={selectedAid} onChange={e => setSelectedAid(e.target.value)}>
            {selectedAid ? null : <option/>}
            {map(aids, ({ name }) => <option key={kebabCase(name)} value={name}>{name}</option> )}
        </select>
        <hr/>
        <Suspense fallback={<div>•••</div>}>
            {aid && <aid.Component/>}
        </Suspense>
    </>;
};
