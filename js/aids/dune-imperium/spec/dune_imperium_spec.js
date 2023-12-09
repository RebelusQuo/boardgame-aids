import { use, expect, should } from 'chai';
import chai_each from 'chai-each';
use(chai_each);
should();

import map from 'lodash/map';
import size from 'lodash/size';
import range from 'lodash/range';
import times from 'lodash/times';
import combine from '../../../lodash/combine';

import { validate } from '../logic';

describe('Dune Imperium logic', () => {

    let both_sources, only_imperium;
    let difficulty_1_4, difficulty_1_3, difficulty_1_2, difficulty_1_1, difficulty_2_4, difficulty_2_3, difficulty_3_4;
    let free_shuffle, house_shuffle;
    let four_players, three_players, two_players, one_player_only_rivals, one_player_and_rivals;
    let exactly_four_choices, exactly_three_choices, exactly_two_choices;
    let try_four_choices, try_three_choices, try_two_choices;
    let defaults;

    setup_constants();

    // sources: ['Imperium', 'Ix'] -- totalt antal
    // difficulty: { min: 1, max: 4 } -- totalt antal
    // shuffle: 'free' -- gruppering
    // players: { n: 4, solo: null } -- fördelning/specialsteg
    // choices: { n: 2, less: false } -- fördelning

    describe('validate', () => {

        describe('filtered by source', () => {

            for (const [title, expected_issue, expected_count, expected_sources, leaders, settings] of sources_cases()) {
                if (expected_issue === false) {
                    it(`considers leaders from ${title}`, () => {
                        const [prepared, actual_issue] = validate(settings, leaders);

                        actual_issue.should.be.false;
                        prepared.should.have.lengthOf(expected_count);
                        map(prepared, 'Source').should.each.be.oneOf(expected_sources);
                    });
                }
                else {
                    it(`takes issue with too few leaders from ${title}`, () => {
                        const [prepared, actual_issue] = validate(settings, leaders);

                        actual_issue.should.be.true;
                        expect(prepared).to.be.null;
                    });
                }
            }

            function* sources_cases() {
                let leaders = [
                    leader({ source: 'Imperium' }), leader({ source: 'Imperium' }), leader({ source: 'Ix' }),
                    leader({ source: 'Imperium' }), leader({ source: 'Imperium' }), leader({ source: 'Ix' }),
                ];
                yield ['Imperium, Ix', false, 6, ['Imperium','Ix'], leaders, combine(defaults, both_sources)];
                yield ['Imperium',     false, 4, ['Imperium'],      leaders, combine(defaults, only_imperium)];

                leaders = [
                    leader({ source: 'Imperium' }), leader({ source: 'Imperium' }), leader({ source: 'Imperium' }),
                    leader({ source: 'Ix' }),       leader({ source: 'Ix' }),       leader({ source: 'Ix' }),
                ];
                yield ['fewer Imperium', true, 3, ['Imperium'], leaders, combine(defaults, only_imperium)];
            }

        });

        describe('filtered by difficulty', () => {

            for (const [title, expected_issue, expected_count, expected_limits, leaders, settings] of difficulty_cases()) {
                if (expected_issue === false) {
                    it(`considers the difficulty range ${title}`, () => {
                        const [from, to] = expected_limits;
                        const expected_range = range(from, to + 1);

                        const [prepared, actual_issue] = validate(settings, leaders);

                        actual_issue.should.be.false;
                        prepared.should.have.lengthOf(expected_count);
                        map(prepared, x => ~~x.Difficulty).should.each.be.oneOf(expected_range)
                    });
                }
                else {
                    it(`takes issue with too few leaders from difficulty range ${title}`, () => {
                        const [prepared, actual_issue] = validate(settings, leaders);

                        actual_issue.should.be.true;
                        expect(prepared).to.be.null;
                    });
                }
            }

            function* difficulty_cases() {
                const leaders = [
                    leader({ difficulty: 1 }), leader({ difficulty: 2 }), leader({ difficulty: 3 }), leader({ difficulty: 4 }),
                    leader({ difficulty: 1 }), leader({ difficulty: 2 }), leader({ difficulty: 3 }), leader({ difficulty: 4 }),
                ];

                yield ['[1-4]', false, 8, [1,4], leaders, combine(defaults, difficulty_1_4)];
                yield ['[1-3]', false, 6, [1,3], leaders, combine(defaults, difficulty_1_3)];
                yield ['[1-2]', false, 4, [1,2], leaders, combine(defaults, difficulty_1_2)];
                yield ['[1-1]', true,  2, [1,1], leaders, combine(defaults, difficulty_1_1)];
                yield ['[2-4]', false, 6, [2,4], leaders, combine(defaults, difficulty_2_4)];
                yield ['[2-3]', false, 4, [2,3], leaders, combine(defaults, difficulty_2_3)];
                yield ['[3-4]', false, 4, [3,4], leaders, combine(defaults, difficulty_3_4)];
            }

        });

        describe('free shuffle', () => {

            for (const [title, expected_issue, nr_leaders, settings] of free_shuffle_cases()) {
                it(expected_issue ? `takes issue with ${title}` : `considers ${title}`, () => {
                    const leaders = times(nr_leaders, _ => leader())

                    const [prepared, actual_issue] = validate(settings, leaders);

                    if (expected_issue === false) {
                        actual_issue.should.be.false;
                        prepared.should.be.an('array');
                    }
                    else {
                        actual_issue.should.be.true;
                        expect(prepared).to.be.null;
                    }
                });
            }

            function* free_shuffle_cases() {
                yield ['4 leaders for 2 players and exactly 2 choices',  false, 4, combine(defaults, two_players, exactly_two_choices)];
                yield ['3 leaders for 2 players and exactly 2 choices',  true,  3, combine(defaults, two_players, exactly_two_choices)];
                yield ['4 leaders for 2 players and close to 2 choices', false, 4, combine(defaults, two_players, try_two_choices)];
                yield ['3 leaders for 2 players and close to 2 choices', false, 3, combine(defaults, two_players, try_two_choices)];
                yield ['2 leaders for 2 players and close to 2 choices', true,  2, combine(defaults, two_players, try_two_choices)];

                yield ['6 leaders for 2 players and exactly 3 choices',  false, 6, combine(defaults, two_players, exactly_three_choices)];
                yield ['5 leaders for 2 players and exactly 3 choices',  true,  5, combine(defaults, two_players, exactly_three_choices)];
                yield ['6 leaders for 2 players and close to 3 choices', false, 6, combine(defaults, two_players, try_three_choices)];
                yield ['5 leaders for 2 players and close to 3 choices', false, 5, combine(defaults, two_players, try_three_choices)];
                yield ['4 leaders for 2 players and close to 3 choices', true,  4, combine(defaults, two_players, try_three_choices)];

                yield ['8 leaders for 2 players and exactly 4 choices',  false, 8, combine(defaults, two_players, exactly_four_choices)];
                yield ['7 leaders for 2 players and exactly 4 choices',  true,  7, combine(defaults, two_players, exactly_four_choices)];
                yield ['8 leaders for 2 players and close to 4 choices', false, 8, combine(defaults, two_players, try_four_choices)];
                yield ['7 leaders for 2 players and close to 4 choices', false, 7, combine(defaults, two_players, try_four_choices)];
                yield ['6 leaders for 2 players and close to 4 choices', true,  6, combine(defaults, two_players, try_four_choices)];

                yield ['6 leaders for 3 players and exactly 2 choices',  false, 6, combine(defaults, three_players, exactly_two_choices)];
                yield ['5 leaders for 3 players and exactly 2 choices',  true,  5, combine(defaults, three_players, exactly_two_choices)];
                yield ['6 leaders for 3 players and close to 2 choices', false, 6, combine(defaults, three_players, try_two_choices)];
                yield ['5 leaders for 3 players and close to 2 choices', false, 5, combine(defaults, three_players, try_two_choices)];
                yield ['4 leaders for 3 players and close to 2 choices', false, 4, combine(defaults, three_players, try_two_choices)];
                yield ['3 leaders for 3 players and close to 2 choices', true,  3, combine(defaults, three_players, try_two_choices)];

                yield ['9 leaders for 3 players and exactly 3 choices',  false, 9, combine(defaults, three_players, exactly_three_choices)];
                yield ['8 leaders for 3 players and exactly 3 choices',  true,  8, combine(defaults, three_players, exactly_three_choices)];
                yield ['9 leaders for 3 players and close to 3 choices', false, 9, combine(defaults, three_players, try_three_choices)];
                yield ['8 leaders for 3 players and close to 3 choices', false, 8, combine(defaults, three_players, try_three_choices)];
                yield ['7 leaders for 3 players and close to 3 choices', false, 7, combine(defaults, three_players, try_three_choices)];
                yield ['6 leaders for 3 players and close to 3 choices', true,  6, combine(defaults, three_players, try_three_choices)];

                yield ['12 leaders for 3 players and exactly 4 choices',  false, 12, combine(defaults, three_players, exactly_four_choices)];
                yield ['11 leaders for 3 players and exactly 4 choices',  true,  11, combine(defaults, three_players, exactly_four_choices)];
                yield ['12 leaders for 3 players and close to 4 choices', false, 12, combine(defaults, three_players, try_four_choices)];
                yield ['11 leaders for 3 players and close to 4 choices', false, 11, combine(defaults, three_players, try_four_choices)];
                yield ['10 leaders for 3 players and close to 4 choices', false, 10, combine(defaults, three_players, try_four_choices)];
                yield ['9 leaders for 3 players and close to 4 choices',  true,  9,  combine(defaults, three_players, try_four_choices)];

                yield ['8 leaders for 4 players and exactly 2 choices',  false, 8, combine(defaults, four_players, exactly_two_choices)];
                yield ['7 leaders for 4 players and exactly 2 choices',  true,  7, combine(defaults, four_players, exactly_two_choices)];
                yield ['8 leaders for 4 players and close to 2 choices', false, 8, combine(defaults, four_players, try_two_choices)];
                yield ['7 leaders for 4 players and close to 2 choices', false, 7, combine(defaults, four_players, try_two_choices)];
                yield ['6 leaders for 4 players and close to 2 choices', false, 6, combine(defaults, four_players, try_two_choices)];
                yield ['5 leaders for 4 players and close to 2 choices', false, 5, combine(defaults, four_players, try_two_choices)];
                yield ['4 leaders for 4 players and close to 2 choices', true,  4, combine(defaults, four_players, try_two_choices)];

                yield ['12 leaders for 4 players and exactly 3 choices',  false, 12, combine(defaults, four_players, exactly_three_choices)];
                yield ['11 leaders for 4 players and exactly 3 choices',  true,  11, combine(defaults, four_players, exactly_three_choices)];
                yield ['12 leaders for 4 players and close to 3 choices', false, 12, combine(defaults, four_players, try_three_choices)];
                yield ['11 leaders for 4 players and close to 3 choices', false, 11, combine(defaults, four_players, try_three_choices)];
                yield ['10 leaders for 4 players and close to 3 choices', false, 10, combine(defaults, four_players, try_three_choices)];
                yield ['9 leaders for 4 players and close to 3 choices',  false, 9,  combine(defaults, four_players, try_three_choices)];
                yield ['8 leaders for 4 players and close to 3 choices',  true,  8,  combine(defaults, four_players, try_three_choices)];

                yield ['16 leaders for 4 players and exactly 4 choices',  false, 16, combine(defaults, four_players, exactly_four_choices)];
                yield ['15 leaders for 4 players and exactly 4 choices',  true,  15, combine(defaults, four_players, exactly_four_choices)];
                yield ['16 leaders for 4 players and close to 4 choices', false, 16, combine(defaults, four_players, try_four_choices)];
                yield ['15 leaders for 4 players and close to 4 choices', false, 15, combine(defaults, four_players, try_four_choices)];
                yield ['14 leaders for 4 players and close to 4 choices', false, 14, combine(defaults, four_players, try_four_choices)];
                yield ['13 leaders for 4 players and close to 4 choices', false, 13, combine(defaults, four_players, try_four_choices)];
                yield ['12 leaders for 4 players and close to 4 choices', true,  12, combine(defaults, four_players, try_four_choices)];
            }

        });

        describe('house shuffle', () => {

            for (const [title, expected_issue, expected_counts, leaders, settings] of house_shuffle_cases()) {
                if (expected_issue === false) {
                    it(`considers ${title}`, () => {
                        const [prepared, actual_issue] = validate(settings, leaders);

                        actual_issue.should.be.false;
                        prepared.should.each.be.an('array');
                        map(prepared, size).should.deep.equal(expected_counts);
                    });
                }
                else {
                    it(`takes issue with ${title}`, () => {
                        const [prepared, actual_issue] = validate(settings, leaders);

                        actual_issue.should.be.true;
                        expect(prepared).to.be.null;
                    });
                }
            }

            function* house_shuffle_cases() {
                const leaders_3_3_3 = [
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                ];
                const leaders_3_3_2 = [
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }),
                ];
                const leaders_3_3_1 = [
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }),
                ];
                const leaders_2_2_2 = [
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                ];
                const leaders_2_2_1 = [
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }),
                ];
                const leaders_1_1_1 = [
                    leader({ house: 'Alpha' }), leader({ house: 'Beta' }), leader({ house: 'Gamma' }),
                ];

                yield ['2 2 2 leaders for 3 players and exactly 2 choices',  false, [2,2,2], leaders_2_2_2, combine(defaults, house_shuffle, three_players, exactly_two_choices)];
                yield ['2 2 1 leaders for 3 players and exactly 2 choices',  true,  [2,2,1], leaders_2_2_1, combine(defaults, house_shuffle, three_players, exactly_two_choices)];
                yield ['2 2 1 leaders for 3 players and close to 2 choices', false, [2,2,1], leaders_2_2_1, combine(defaults, house_shuffle, three_players, try_two_choices)];
                yield ['1 1 1 leaders for 3 players and close to 2 choices', true,  [1,1,1], leaders_1_1_1, combine(defaults, house_shuffle, three_players, try_two_choices)];

                yield ['3 3 3 leaders for 3 players and exactly 3 choices',  false, [3,3,3], leaders_3_3_3, combine(defaults, house_shuffle, three_players, exactly_three_choices)];
                yield ['3 3 2 leaders for 3 players and exactly 3 choices',  true,  [3,3,2], leaders_3_3_2, combine(defaults, house_shuffle, three_players, exactly_three_choices)];
                yield ['3 3 2 leaders for 3 players and close to 3 choices', false, [3,3,2], leaders_3_3_2, combine(defaults, house_shuffle, three_players, try_three_choices)];
                yield ['3 3 1 leaders for 3 players and close to 3 choices', true,  [3,3,1], leaders_3_3_1, combine(defaults, house_shuffle, three_players, try_three_choices)];
                yield ['2 2 2 leaders for 3 players and close to 3 choices', true,  [2,2,2], leaders_2_2_2, combine(defaults, house_shuffle, three_players, try_three_choices)];
            }

        });

        describe('solo', () => {

            describe('only rivals', () => {

                for (const [title, expected_issue, expected_count, expected_sources, leaders, settings] of solo_only_rivals_cases()) {
                    if (expected_issue === false) {
                        it(`considers solo rivals from ${title}`, () => {
                            const [prepared, actual_issue] = validate(settings, leaders);

                            actual_issue.should.be.false;
                            prepared.should.have.property('rivals');
                            prepared.rivals.should.have.length(expected_count);
                            prepared.rivals.should.each.have.property('Rival');
                            map(prepared.rivals, 'Source').should.each.be.oneOf(expected_sources);
                        });
                    }
                    else {
                        it(`takes issue with solo rivals that are ${title}`, () => {
                            const [prepared, actual_issue] = validate(settings, leaders);

                            actual_issue.should.be.true;
                            expect(prepared).to.be.null;
                        });
                    }
                }

                function* solo_only_rivals_cases() {
                    const leaders = [
                        ...times(9, _ => leader({ source: 'Imperium' })),
                        ...times(3, _ => leader({ source: 'Imperium', rival: true })),
                        ...times(7, _ => leader({ source: 'Ix' })),
                        ...times(5, _ => leader({ source: 'Ix', rival: true })),
                    ];
                    const all_diff_leaders = times(4, i => leader({ difficulty: (i+1), rival: true }));
                    const too_few_leaders = [leader({ rival: true })];

                    yield ['Imperium',         false, 3, ['Imperium'],      leaders,          combine(defaults, only_imperium, one_player_only_rivals)];
                    yield ['Imperium, Ix',     false, 8, ['Imperium','Ix'], leaders,          combine(defaults, both_sources,  one_player_only_rivals)];
                    yield ['all Difficulties', false, 4, ['Imperium','Ix'], all_diff_leaders, combine(defaults, both_sources,  one_player_only_rivals, difficulty_2_3)];
                    yield ['too few',          true,  1, ['Imperium','Ix'], too_few_leaders,  combine(defaults, both_sources,  one_player_only_rivals)];
                }

            });

            describe('player and rivals', () => {

                // source, difficulty, choices (only exactly)
                for (const [title, expected_issue, expected_rival_count, expected_total_count, leaders, settings] of solo_player_and_rivals_cases()) {
                }

                function* solo_player_and_rivals_cases() {
                    const leaders = [
                        ...times(9, _ => leader({ source: 'Imperium' })),
                        ...times(3, _ => leader({ source: 'Imperium', rival: true })),
                        ...times(7, _ => leader({ source: 'Ix' })),
                        ...times(5, _ => leader({ source: 'Ix', rival: true })),
                    ];
                    // what happens when difficulty removes some leaders for the player and rivals may or may not reduce the remaining too much?
                    const all_diff_leaders = [
                        ...times(4, i => leader({ difficulty: (i+1), rival: true })),
                        ...times(4, i => leader({ difficulty: (i+1) })),
                    ];
                    const too_few_rival_leaders = [...times(1, () => leader({ rival: true })), ...times(3, leader) ];
                    const too_few_total_leaders = [...times(2, () => leader({ rival: true })), ...times(1, leader) ];

                    yield ['Imperium',         false, 3, 12, ['Imperium'],       leaders,               combine(defaults, only_imperium, one_player_and_rivals)];
                    yield ['Imperium, Ix',     false, 8, 24, ['Imperium', 'Ix'], leaders,               combine(defaults, both_sources,  one_player_and_rivals)];
                    yield ['all Difficulties', false, 2,  4, ['Imperium', 'Ix'], all_diff_leaders,      combine(defaults, both_sources,  one_player_and_rivals, difficulty_2_3)];
                    yield ['too few rivals',   true,  1,  4, ['Imperium', 'Ix'], too_few_rival_leaders, combine(defaults, both_sources,  one_player_and_rivals)];
                    yield ['too few total',    true,  2,  3, ['Imperium', 'Ix'], too_few_total_leaders, combine(defaults, both_sources,  one_player_and_rivals)];
                }

            });

        });

    });

    function leader(fields = {}) {
        const { source = 'Imperium', house = '', difficulty = 1, rival = null } = fields;
        return combine(
            { Source: source, House: house, Difficulty: `${difficulty}` },
            rival ? { Rival: '' } : {}
        );
    }

    function setup_constants() {
        both_sources = { sources: ['Imperium', 'Ix'] };
        only_imperium = { sources: ['Imperium'] };

        difficulty_1_4 = { difficulty: { min: 1, max: 4 } };
        difficulty_1_3 = { difficulty: { min: 1, max: 3 } };
        difficulty_1_2 = { difficulty: { min: 1, max: 2 } };
        difficulty_1_1 = { difficulty: { min: 1, max: 1 } };
        difficulty_2_4 = { difficulty: { min: 2, max: 4 } };
        difficulty_2_3 = { difficulty: { min: 2, max: 3 } };
        difficulty_3_4 = { difficulty: { min: 3, max: 4 } };

        free_shuffle = { shuffle: 'free' };
        house_shuffle = { shuffle: 'house' };

        four_players = { players: { n: 4, solo: null } };
        three_players = { players: { n: 3, solo: null } };
        two_players = { players: { n: 2, solo: null } };
        one_player_only_rivals = { players: { n: 1, solo: 'rivals' } };
        one_player_and_rivals = { players: { n: 1, solo: 'player_rivals' } };

        exactly_four_choices =  { choices: { n: 4, less: false } };
        exactly_three_choices = { choices: { n: 3, less: false } };
        exactly_two_choices =   { choices: { n: 2, less: false } };
        try_four_choices =  { choices: { n: 4, less: true } };
        try_three_choices = { choices: { n: 3, less: true } };
        try_two_choices =   { choices: { n: 2, less: true } };

        defaults = combine(both_sources, difficulty_1_4, free_shuffle, two_players, exactly_two_choices);
    }
});
