import { useRef, useEffect } from 'react';
import { useLocalStorage } from '../../useLocalStorage';

import { Button, ConfirmButton, Continue, Reset } from '../../gui';

import { SetupList, SetupListRow, Tile, Wrap } from './style';
import { PrivateBuildings, BuildingFlex } from './style';
import { NeutralBuildings, NeutralBuildingGrid, BuildingCell } from './style';
import { Rails, Town } from './style';
import { Trail, TrailVerticalHazzards, TrailHorizontalHazzards, TrailBandits } from './style';
import { InitialMarket, Foresight } from './style';

import { TrailPath, StationMasterTile, MediumTownTile, BagTile } from './gfx';

import { setup, delivered, restoreBags } from './logic';

import map from 'lodash/map';
import forEach from 'lodash/forEach';
import cloneDeep from 'lodash/cloneDeep';
import isNil from 'lodash/isNil';
import oneOf from '../../lodash/oneOf';

import Mnt from '../../mnt';
import { readFileSync } from 'fs';

export const tiles = Mnt.parse(readFileSync(__dirname + '/tiles.mnt', 'utf8'));
forEach(tiles, bag => forEach(bag, tile => tile.Count = ~~tile.Count));

export default function GreatWesternTrail() {
    const [state, setState] = useLocalStorage('great-western-trail--state');
    const [settings, setSettings] = useLocalStorage('great-western-trail--settings', { players: 4, rttn: false });
    const { players, rttn } = settings;
    const bags = useRef();
    const deliveredRef = useRef();

    useEffect(() => {
        if (!isNil(state?.bags) && isNil(bags.current))
            bags.current = restoreBags(state.bags);
    }, [state?.bags]);

    useEffect(() => {
        if (state?.stage === 'delivered')
            deliveredRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [state?.stage, state?.foresight]);

    function onChangePlayers(value) {
        setSettings({ ...settings, players: ~~value });
    }

    function onChangeRttn(checked) {
        setSettings({ ...settings, rttn: checked });
    }

    function onSetup() {
        const [state, _bags] = setup(cloneDeep(tiles), players, rttn);
        bags.current = _bags;
        setState({ ...state, stage: 'setup' });
    }

    function onDelivered() {
        const [_state, _bags] = delivered(state, bags.current);
        bags.current = _bags;
        setState({ ..._state, stage: 'delivered' });
    }

    return <>
        <div>
            {isNil(state)
                ? <Button onClick={onSetup}>Setup</Button>
                : <ConfirmButton kind={Reset} onConfirm={onSetup}>Setup</ConfirmButton>
            }
            <select value={players} onChange={e => onChangePlayers(~~e.target.value)}>
                <option value={2}>2 Players</option>
                <option value={3}>3 Players</option>
                <option value={4}>4 Players</option>
            </select>
            <label>
                <input type="checkbox" checked={rttn} onChange={e => onChangeRttn(e.target.checked)} />
                {' '}Rails to the North
            </label>
        </div>

        {isNil(state) ? null :
            <SetupList>
                <SetupListRow>
                    <PrivateBuildings $rttn={state.rttn}>
                        {map(state.private, (t, i) => <>
                            <BuildingFlex key={i}>{i+1}{t}</BuildingFlex>
                            {state.rttn && oneOf(i+1, [4,8]) ? <Wrap key={`w${i}`} /> : null}
                        </>)}
                    </PrivateBuildings>

                    {!state.neutral ? null :
                        <NeutralBuildings>
                            <TrailPath/>
                            <NeutralBuildingGrid>
                                {map(state.neutral, (t, i) =>
                                    <BuildingCell key={i} $area={String.fromCharCode('a'.charCodeAt(0) + i)}>{t}</BuildingCell>
                                )}
                            </NeutralBuildingGrid>
                        </NeutralBuildings>
                    }
                </SetupListRow>

                <Rails $rttn={state.rttn}>
                    {map(state.stationMasters, (k, i) => <>
                        <Tile key={`sm${i}`}><StationMasterTile tile={k+1} /></Tile>
                        {state.rttn && i+1 === 5 ? <Wrap key={`w${i}`} /> : null}
                    </>)}
                    {map(state.mediumTowns, (k, i) => <>
                        <Town key={`mt${i}`}><MediumTownTile tile={k+1} /></Town>
                    </>)}
                </Rails>

                <Trail>
                    <TrailVerticalHazzards>
                        {map(state.trail.Drought, ({ Type, Kind, Hand }, i) =>
                            <Tile key={i}><BagTile type={Type} kind={Kind} hand={Hand} /></Tile>
                        )}
                    </TrailVerticalHazzards>
                    <TrailHorizontalHazzards>
                        {map(state.trail.Flood, ({ Type, Kind, Hand }, i) =>
                            <Tile key={i}><BagTile type={Type} kind={Kind} hand={Hand} /></Tile>
                        )}
                    </TrailHorizontalHazzards>
                    <TrailVerticalHazzards>
                        {map(state.trail.Rockslide, ({ Type, Kind, Hand }, i) =>
                            <Tile key={i}><BagTile type={Type} kind={Kind} hand={Hand} /></Tile>
                        )}
                    </TrailVerticalHazzards>
                    <TrailBandits>
                        <Tile/>
                        {map(state.trail.Bandit, ({ Type, Kind, Hand }, i) =>
                            <Tile key={i}><BagTile type={Type} kind={Kind} hand={Hand} /></Tile>
                        )}
                    </TrailBandits>
                </Trail>

                <InitialMarket $count={state.players}>
                    {map(state.market, ({ Type }, i) =>
                        <Tile key={i}><BagTile type={Type} /></Tile>
                    )}
                </InitialMarket>

                <Foresight>
                    {map(state.foresight, (x, i) => {
                        const { Type, Kind, Hand } = x || {};
                        return <Tile key={i}>
                            {x ? <BagTile type={Type} kind={Kind} hand={Hand} /> : null}
                        </Tile>;
                    })}
                </Foresight>

                <div ref={deliveredRef}>
                    <ConfirmButton kind={Continue} onConfirm={onDelivered}>Delivered</ConfirmButton>
                </div>
            </SetupList>
        }
    </>;
}
