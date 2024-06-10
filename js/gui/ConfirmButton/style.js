import styled from 'styled-components';

import { Button } from '../Button';

export const StyledConfirmButton = styled(Button)`
  box-shadow: ${({ $bg }) => $bg ? `0 0 1px 2px ${$bg}` : 'none'}
`;
