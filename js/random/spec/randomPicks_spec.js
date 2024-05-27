import { expect, should } from 'chai';
should();

import map from 'lodash/map';
import forEach from 'lodash/forEach';
import flatten from 'lodash/flatten';
import uniqBy from 'lodash/uniqBy';
import times from 'lodash/times';
import sum from 'lodash/sum';
import join from 'lodash/join';

import { randomPicks } from '../randomPicks';

describe('randomPicks', () => {

    describe('take once', () => {

        for (const { n, m } of cases()) {
            it(`reports the remaining number of possibilities from ${n} to ${n-(m-1)}`, () => {
                const actual = randomPicks.take(n, m);

                actual.should.be.an('array').with.lengthOf(m);
                forEach(actual, ([k,], i) =>
                    k.should.equal(n-i, `index ${i}`)
                );
            });
        }

        for (const { n, m } of cases()) {
            it(`generates a sequence of ${m} unique picks with zero-based values under ${n}`, () => {
                const actual = randomPicks.take(n, m);

                actual.should.be.an('array').with.lengthOf(m);
                uniqBy(actual, ([,i]) => i).should.have.lengthOf(m, 'had duplicate values');
                forEach(actual, ([,i]) => i.should.be.within(0, n-1));
            });
        }

        it('does not break if asked to pick too many', () => {
            let actual;
            expect(() => actual = randomPicks.take(1, 2)).to.not.throw();

            actual.should.be.an('array').with.lengthOf(1);
        });

        function* cases() {
            yield { n: 40, m: 12 };
            yield { n: 5,  m: 5 };
        }

    });

    describe('create and take', () => {

        for (const { n, m } of cases()) {
            it(`reports the remaining number of possibilities from ${n} to ${n-(sum(m)-1)}`, () => {
                const pick = randomPicks.create(n);

                const actual = times(m.length, i => pick(m[i]));

                let i0 = -1;
                forEach(actual, (inner, t) => {
                    inner.should.be.an('array').with.lengthOf(m[t]);
                    forEach(inner, ([k,], i) =>
                        k.should.equal(n-(i0+=1), `take ${t+1} index ${i}`)
                    );
                })
            });
        }

        for (const { n, m } of cases()) {
            it(`generates sequences of ${join(m, ', ')} unique picks with zero-based values under ${n}`, () => {
                const pick = randomPicks.create(n);

                const actual = times(m.length, i => pick(m[i]));

                forEach(actual, (inner, j) => {
                    inner.should.be.an('array').with.lengthOf(m[j]);
                    uniqBy(inner, ([,i]) => i).should.have.lengthOf(m[j], 'had duplicate values');
                    forEach(inner, ([,i]) => i.should.be.within(0, n-1));
                });
                uniqBy(flatten(actual), ([,i]) => i).should.have.lengthOf(sum(m), 'had duplicate values');
            });
        }

        it('does not break if asked to pick too many', () => {
            const pick = randomPicks.create(1);

            let actual;
            expect(() => actual = pick(2)).to.not.throw();

            actual.should.be.an('array').with.lengthOf(1);

            expect(() => actual = pick(1)).to.not.throw();

            actual.should.be.an('array').with.lengthOf(0);
        });

        function* cases() {
            yield { n: 40, m: [8, 5, 3] };
            yield { n: 5,  m: [2, 2, 1] };
        }

        it('can persist and be restored', () => {
            let pick = randomPicks.create(10);

            const before = pick(5);

            const persist = pick.persist();
            pick = randomPicks.restore(persist);

            const after = pick(5);

            const beforeK = map(before, ([k,]) => k);
            const afterK = map(after, ([k,]) => k);
            const expectedK = times(10, i => 10 - i);
            [...beforeK, ...afterK].should.deep.equal(expectedK);

            const beforeI = map(before, ([,i]) => i);
            const afterI = map(after, ([,i]) => i);
            beforeI.should.not.have.members(afterI);
        });

    });

});
