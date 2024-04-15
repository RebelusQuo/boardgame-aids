import styled from 'styled-components';

import isNil from 'lodash/isNil';

const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(6, min-content);
    grid-template-rows: repeat(6, min-content);
    gap: .5em;
`;

export const Block = styled(Centered)`
    width: calc(4em - 2px);
    height: calc(4em - 2px);
    border: 1px solid black;
    font-weight: bold;
`;

export const Outskirts = styled.div`
    display: flex;
    gap: .5em;

    &[edge=n], &[edge=s] { flex-direction: row; }
    &[edge=w], &[edge=e] { flex-direction: column; }
`;

export const Outskirt = styled(Centered)`
    width: calc(2.5em - 2px);
    height: calc(2.5em - 2px);
    border: 1px solid black;

    ${Outskirts}[edge=n] > & { border-top: none; width: calc(8.5em - 2px); }
    ${Outskirts}[edge=w] > & { border-left: none; height: calc(8.5em - 2px); }
    ${Outskirts}[edge=e] > & { border-right: none; height: calc(4em - 2px); }
    ${Outskirts}[edge=s] > & { border-bottom: none; width: calc(4em - 2px); }

    ${Outskirts}[edge=n] > &,
    ${Outskirts}[edge=e] > & { background-color: mediumblue; }
    ${Outskirts}[edge=s] > &,
    ${Outskirts}[edge=w] > & { background-color: forestgreen; }
`;

export const Marker = styled(Centered)`
    width: 2em;
    height: 2em;
    border: 1px solid black;
    border-radius: 100%;
    background-color: ${({ value, wealth }) => isNil(value) ? 'gray'
        : wealth || value >= 7 ? 'yellow' : 'red' };
    font-weight: bold;
`;

export const CityGrid = styled.div`
    background-color: #666;
    display: inline grid;
    grid-template-columns: repeat(8, min-content);
    grid-template-rows: repeat(8, min-content);
    grid-template-areas:
        ". n n n n n n ."
        "w b b b b b b e"
        "w b b b b b b e"
        "w b b b b b b e"
        "w b b b b b b e"
        "w b b b b b b e"
        "w b b b b b b e"
        ". s s s s s s .";
    gap: .5em;

    & > ${Blocks} { grid-area: b; }
    & > ${Outskirts}[edge=n] { grid-area: n; }
    & > ${Outskirts}[edge=w] { grid-area: w; }
    & > ${Outskirts}[edge=e] { grid-area: e; }
    & > ${Outskirts}[edge=s] { grid-area: s; }
`;
