import styled from 'styled-components';
import { Link } from 'gatsby';

import { PRIMARY, PRIMARY_HOVER, WHITE } from '../constants/Color';

export const StyledLink = styled(Link)`
  /* box-shadow: none; */
  color: inherit;

  &:hover,
  &:active {
    color: inherit;
    background-color: inherit;
  }
`;

export const StandardLink = styled(Link)`
  /* box-shadow: none; */
  color: ${PRIMARY};

  &:hover,
  &:active {
    color: ${PRIMARY_HOVER};
    background-color: inherit;
  }
`;

export const WhiteLink = styled(Link)`
  /* box-shadow: none; */
  color: ${WHITE};

  &:hover,
  &:active {
    color: ${PRIMARY_HOVER};
    background-color: inherit;
  }
`;
