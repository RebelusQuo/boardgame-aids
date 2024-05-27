import { useLocalStorage } from '../../useLocalStorage';

import { ConfirmButton } from '../ConfirmButton';

import { readFileSync } from 'fs';
import Mnt from '../../mnt';

import cloneDeep from 'lodash/cloneDeep';

const tiles = Mnt.parse(readFileSync(__dirname + '/tiles.mnt', 'utf8'));

export default function GreatWesternTrail() {
    const [state, setState] = useLocalStorage('great-western-trail', null);

    function onSetup() {
        //
    }

    function onSetupForget() {
        //
    }

    return <>
        <ConfirmButton kind={} requireConfirm={state != null} onConfirmTimeout={onSetupForget} onConfirm={onSetup}>Setup</ConfirmButton>
    </>;
}

function setup(players) {
    let bags = cloneDeep(tiles);

    // Neutral buildings

    // Private buildings

    // Setup Bag 1

    // Setup Bag 2

    // Rebuild

    // Setup foresight

    return
}

function deliver(state) {

}
