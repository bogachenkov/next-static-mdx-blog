import { StyledTitle } from '@ui/Title/styled';
import styled from 'styled-components';

export const StyledCategories = styled.div`
  ${StyledTitle} {
    margin: 0 0 40px 0;
  }
`;

export const StyledCategoriesGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;