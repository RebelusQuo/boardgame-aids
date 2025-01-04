import { distribution, random, randomPicks } from '../../random';

import map from 'lodash/map';
import every from 'lodash/every';
import concat from 'lodash/concat';
import flatten from 'lodash/flatten';
import times from 'lodash/times';
import zip from 'lodash/zip';
import omit from 'lodash/omit';

export function setup([bag1, bag2, bag3], bot, players, rttn) {
    let dist, pick;
    const state = { bot, players, rttn };

    state.neutral = neutralBuildings();
    state.private = privateBuildings(rttn);

    state.stationMasters = stationMasterTiles(rttn);
    state.mediumTowns = mediumTownTiles(rttn);

    [state.trail, dist, pick] = setupBag1(bag1);
    bag1 = { bag: bag1, dist, pick };

    [state.bot_focus, state.market, dist, pick] = setupBag2(bag2, bot, players);
    bag2 = { bag: bag2, dist, pick };

    [dist, pick] = setupBag3(bag3);
    bag3 = { bag: bag3, dist, pick };

    state.foresight = setupForesight(bag1, bag2, bag3);

    const bags = [bag1, bag2, bag3];
    state.bags = persistBags(bags);
    return [state, bags];
}

function neutralBuildings() {
    const [G, A] = map(['G', 'A'], x => x.charCodeAt(0));
    const nrNeutral = G + 1 - A;
    const neutral = randomPicks.take(nrNeutral);
    return map(neutral, ([, n]) => String.fromCharCode(A + n));
}

function privateBuildings(rttn) {
    const a = 'a'.charCodeAt(0);
    const n = rttn ? 13 : 12;
    const _private = random(1 << n);
    return map(times(n, k => (_private & (1 << k)) > 0), x => String.fromCharCode(a + x));
}

function stationMasterTiles(rttn) {
    const [n, m] = rttn ? [11, 7] : [9, 5];
    return map(randomPicks.take(n, m), ([,k]) => k);
}

function mediumTownTiles(rttn) {
    const n = 10, m = 6;
    // 5 alternatives all with weight 2 => 10 rsh 1
    return rttn ? map(randomPicks.take(n, m), ([,k]) => k >>> 1) : [];
}

function setupBag1(bag1) {
    const slots = { Flood: 4, Drought: 4, Rockslide: 4, Bandit: 10 };
    const trail = { Flood: [], Drought: [], Rockslide: [], Bandit: [] };

    let [sum, bagDist] = createBagDist(bag1);
    let bagPick = randomPicks.create(sum);

    let picks = 7;
    while (picks > 0) {
        const [[, k]] = bagPick(1);
        const item = bagDist(k);
        const { Type } = item;
        if (slots[Type] > 0) {
            picks -= 1;
            item.Count -= 1;
            slots[Type] -= 1;
            trail[Type].push(pickItem(item));
        }
    }

    // Recreate in case we skipped any tiles
    [sum, bagDist] = createBagDist(bag1);
    bagPick = randomPicks.create(sum);
    return [trail, bagDist, bagPick];
}

function setupBag2(bag2, bot, players) {
    const [sum, bagDist] = createBagDist(bag2);
    const bagPick = randomPicks.create(sum);

    const bot_focus = bot
        ? map(map(bagPick(1), ([,k]) => k), k => pickItem(bagDist(k)))
        : [];

    const count = players * 2 - 1;
    const picks = map(bagPick(count), ([,k]) => k);
    const market = map(picks, k => pickItem(bagDist(k)));

    return [bot_focus, market, bagDist, bagPick];
}

 function setupBag3(bag3) {
    const [sum, bagDist] = createBagDist(bag3);
    const bagPick = randomPicks.create(sum);
    return [bagDist, bagPick];
}

function setupForesight(bag1, bag2, bag3) {
    const picks1 = map(bag1.pick(2), ([,k]) => k);
    const picks2 = map(bag2.pick(2), ([,k]) => k);
    const picks3 = map(bag3.pick(2), ([,k]) => k);
    const items1 = map(picks1, k => pickItem(bag1.dist(k)));
    const items2 = map(picks2, k => pickItem(bag2.dist(k)));
    const items3 = map(picks3, k => pickItem(bag3.dist(k)));
    return byRow(items1, items2, items3);
}

export function delivered(state, [bag1, bag2, bag3]) {
    const bags = [bag1, bag2, bag3];

    const pick1 = map(bag1.pick(1), ([n,k]) => [n === 0, k]);
    const pick2 = map(bag2.pick(1), ([n,k]) => [n === 0, k]);
    const pick3 = map(bag3.pick(1), ([n,k]) => [n === 0, k]);

    if (every(concat(pick1, pick2, pick3), ([n]) => n))
        return [state, bags];

    const item1 = map(pick1, ([skip, k]) => skip ? null : pickItem(bag1.dist(k)));
    const item2 = map(pick2, ([skip, k]) => skip ? null : pickItem(bag2.dist(k)));
    const item3 = map(pick3, ([skip, k]) => skip ? null : pickItem(bag3.dist(k)));
    state = { ...state,
        bags: persistBags(bags),
        foresight: [...state.foresight, ...byRow(item1, item2, item3)]
    };
    return [state, bags];
}

function pickItem(item) {
    return omit(item, 'Count');
}

function byRow(...params) {
    return flatten(zip(...params));
}

function persistBags(bags) {
    return map(bags, ({ bag, pick }) => ({ bag, pick: pick.persist() }));
}

export function restoreBags(bags) {
    return map(bags, ({ bag, pick }) => {
        const [, dist] = createBagDist(bag);
        pick = randomPicks.restore(pick);
        return { bag, dist, pick };
    });
}

function createBagDist(bag) {
    return distribution(map(bag, (item => [~~item.Count, item])));
}
