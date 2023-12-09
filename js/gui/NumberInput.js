import styled from 'styled-components';

export const NumberInput = styled.input
    .attrs(({ size }) => ({
      type: 'number',
      size: (size || 1) + 1,
    }))`
  width: ${({ size }) => size}em;
`;
