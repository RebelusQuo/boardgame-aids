import { expect } from 'chai';
import { readFileSync } from 'fs';

import Mnt from '..';

describe('MinimalNestedText', () => {

    for (const { title, text, expected } of cases()) {
        it(`Parses a ${title} correctly`, () => {
            const actual = Mnt.parse(text, { top: 'any' });
            expect(actual).to.deep.equal(expected);
        });
    }

});

function* cases() {
    yield { title: 'single line with crlf ending', text: readText('string_single_eol.nt', '\r\n'), expected: readJson('string_single.json') };
    yield { title: 'single line with cr ending',   text: readText('string_single_eol.nt', '\r'),   expected: readJson('string_single.json') };
    yield { title: 'single line with lf ending',   text: readText('string_single_eol.nt', '\n'),   expected: readJson('string_single.json') };
    yield { title: 'single line with eof ending',  text: readText('string_single_eof.nt'),         expected: readJson('string_single.json') };

    yield { title: 'simple list', text: readText('list_simple.nt'), expected: readJson('list_simple.json') };
    yield { title: 'nested list', text: readText('list_nested.nt'), expected: readJson('list_nested.json') };

    yield { title: 'simple dictionary', text: readText('dict_simple.nt'), expected: readJson('dict_simple.json') };
    yield { title: 'nested dictionary', text: readText('dict_nested.nt'), expected: readJson('dict_nested.json') };

    yield { title: 'mixed structure', text: readText('mixed_dict_list.nt'), expected: readJson('mixed_dict_list.json') };

    yield { title: 'single empty line', text: readText('string_empty.nt'),        expected: readJson('string_empty.json') };
    yield { title: 'nested empty line', text: readText('string_empty_nested.nt'), expected: readJson('string_empty_nested.json') };
}

function readJson(path) {
    return JSON.parse(readText(path));
}

function readText(path, eol = null) {
    const text = readFileSync(`./js/mnt/spec/fixtures/${path}`, 'utf8');
    return eol ? text.replace(/\r\n|\r|\n/, eol) : text;
}
