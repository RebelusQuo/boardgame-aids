import { should } from 'chai';
should();

import reverse from 'lodash/reverse';
import identity from 'lodash/identity';

import groupIntoArrayBy from '../groupIntoArrayBy';

describe('groupIntoArrayBy', () => {

    it('groups some letters by first occurence', () => {
        const initial_array = ['C','A','B','A','C','B'];
        const reverse_array = reverse([...initial_array]);

        const initial_actual = groupIntoArrayBy(initial_array, identity);
        const reverse_actual = groupIntoArrayBy(reverse_array, identity);

        initial_actual.should.deep.equal([['C','C'],['A','A'],['B','B']], 'initial array');
        reverse_actual.should.deep.equal([['B','B'],['C','C'],['A','A']], 'reverse array');
    });

    it('groups some objects by first occurence', () => {
        const initial_array = [
            { x: 'C', y: 2 },{ x: 'A', y: 1 },{ x: 'B', y: 2 },
            { x: 'A', y: 2 },{ x: 'C', y: 1 },{ x: 'B', y: 1 },
        ];
        const reverse_array = reverse([...initial_array]);

        const initial_actual = groupIntoArrayBy(initial_array, ({ x }) => x);
        const reverse_actual = groupIntoArrayBy(reverse_array, ({ x }) => x);

        initial_actual.should.deep.equal([
            [{ x: 'C', y: 2 },{ x: 'C', y: 1 }],
            [{ x: 'A', y: 1 },{ x: 'A', y: 2 }],
            [{ x: 'B', y: 2 },{ x: 'B', y: 1 }],
        ], 'initial array');
        reverse_actual.should.deep.equal([
            [{ x: 'B', y: 1 },{ x: 'B', y: 2 }],
            [{ x: 'C', y: 1 },{ x: 'C', y: 2 }],
            [{ x: 'A', y: 2 },{ x: 'A', y: 1 }],
        ], 'reverse array');
    });

    it('defaults to using the identity function', () => {
        const array = ['A','B'];

        const actual = groupIntoArrayBy(array);

        actual.should.deep.equal([['A'],['B']]);
    });

    it('supports the property shorthand', () => {
        const array = [{ x: 'A' },{ x: 'B' }];

        const actual = groupIntoArrayBy(array, 'x');

        actual.should.deep.equal([[{ x: 'A' }],[{ x: 'B' }]]);
    });

    it('supports the matches shorthand', () => {
        const array = [
            { x: 'A', y: 1, z: 11 },
            { x: 'A', y: 2, z: 13 },
            { x: 'A', y: 1, z: 17 },
            { x: 'B', y: 1, z: 19 },
        ];

        const actual = groupIntoArrayBy(array, { x: 'A', y: 1 });

        actual.should.deep.equal([
            [{ x: 'A', y: 1, z: 11 },{ x: 'A', y: 1, z: 17 }],
            [{ x: 'A', y: 2, z: 13 },{ x: 'B', y: 1, z: 19 }],
        ]);
    });

    it('supports the matchesProperty shorthand', () => {
        const array = [{ x: 'A', y: 1 },{ x: 'A', y: 2 },{ x: 'B', y: 3 }];

        const actual = groupIntoArrayBy(array, ['x', 'A']);

        actual.should.deep.equal([
            [{ x: 'A', y: 1 },{ x: 'A', y: 2 }],
            [{ x: 'B', y: 3 }],
        ]);
    });

});
