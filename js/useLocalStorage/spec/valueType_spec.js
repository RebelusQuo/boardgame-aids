import { should, expect } from 'chai';
should();

import { valueType } from "../valueType";

describe('valueType', () => {

    for (const [type, value] of positive_cases()) {
        it(`Identifies an ${type}`, () => {
            var actual = valueType(value);
            actual.should.equal(type);
        });
    }

    it("Returns null for other types", () => {
        var actual = valueType(new Uint8Array());
        expect(actual).to.be.null;
    });

    function* positive_cases() {
        yield ['nil', null];
        yield ['nil', undefined];
        yield ['boolean', true];
        yield ['number', 1.0];
        yield ['string', 'text'];
        yield ['symbol', Symbol('term')];
        yield ['array', [1,2]];
        yield ['object', { some: 'prop' }];
    }
});
