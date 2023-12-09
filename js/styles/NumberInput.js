import styled from 'styled-components';

export const NumberInput = styled.input
    .attrs(_ => ({ type: 'number' }))
`
  width: ${({ size }) => (~~size || 1) + 1}em;
`;
