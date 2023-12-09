import styled from 'styled-components';

const Label = styled.label``;
const IndentLabel = styled.label``;

export const Field = styled.div`
    display: flex;
    & ${Label}:first-child {
        width: 10em;
    }
    & ${IndentLabel} {
        margin-left: 10em;
    }
`;

Field.Label = Label;
Field.IndentLabel = IndentLabel;
