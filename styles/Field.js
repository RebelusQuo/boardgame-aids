import styled from 'styled-components';

export const Field = styled.div`
    display: flex;
    & label:first-child:not(.indent) {
        width: 10em;
    }
    & .indent {
        margin-left: 10em;
    }
`;
