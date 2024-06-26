import { Suspense, lazy } from 'react';
import { useLocalStorage } from './useLocalStorage';

import map from 'lodash/map';
import find from 'lodash/find';
import kebabCase from 'lodash/kebabCase'

const aids = [
    { name: 'Placeholder', Component: lazy(() => import('./aids/placeholder')) }
];

export function App() {
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
