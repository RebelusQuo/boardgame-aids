import { should } from 'chai';
should();

import { migrate } from '../migrate';

import map from 'lodash/map';
import zip from 'lodash/zip';

describe('migrate', () => {

    it('Does not update to the same primitive type', () => {
        var value = 1;
        var defaults = 2;

        value = migrate(value, defaults);

        value.should.be.equal(1);
    });

    it('Does update to a new primitive type', () => {
        var value = true;
        var defaults = 2;

        value = migrate(value, defaults);

        value.should.be.equal(2);
    });

    it('Updates each separate primitive object property', () => {
        var value = { A: 1, B: true };
        var defaults = { A: 2, B: 2 };

        value = migrate(value, defaults);

        value.should.deep.equal({ A: 1, B: 2 })
    });

    it('Updates objects recursively', () => {
        var value = { A: { B: true } };
        var defaults = { A: { B: 2 } };

        value = migrate(value, defaults);

        value.should.deep.equal({ A: { B: 2 } });
    });

    it('Makes immutable updates', () => {
        var value = { A: { B: true }, C: { D: 1 } };
        var defaults = { A: { B: 2 }, C: { D: 2 } };

        var actual = migrate(value, defaults);

        actual.should.not.equal(value);
        actual.A.should.not.equal(value.A);
        actual.C.should.equal(value.C);
    });

    it('Adds new properties', () => {
        var value = { A: {} };
        var defaults = { A: { B: 1 }, C: 2 };

        value = migrate(value, defaults);

        value.should.deep.equal({ A: { B: 1 }, C: 2 });
    });

    it('Makes immutable additions', () => {
        var value = { A: {} };
        var defaults = { A: { B: 1 }, C: 2 };

        var actual = migrate(value, defaults);

        actual.should.not.equal(value);
        actual.A.should.not.equal(value.A);
    });

    it('Delete old properties', () => {
        var value = { A: { B: 1 }, C: 2 };
        var defaults = { A: {} };

        value = migrate(value, defaults);

        value.should.deep.equal({ A: {} });
    });

    it('Makes immutable deletions', () => {
        var value = { A: { B: 1 }, C: 2 };
        var defaults = { A: {} };

        var actual = migrate(value, defaults);

        actual.should.not.equal(value);
        actual.A.should.not.equal(value.A);
    });

    it('Uses an update function', () => {
        var value = { A: [1,2] };
        var defaults = { A: [5,7], $A: (v, d) => map(zip(v, d), ([x,y]) => x*y) }

        value = migrate(value, defaults);

        value.should.deep.equal({ A: [5,14] });
    });

});
