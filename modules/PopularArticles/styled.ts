import { StyledTitle } from '@ui/Title/styled';
import styled from 'styled-components';

export const StyledPopularArticles = styled.div`

  & > ${StyledTitle} {
    margin-bottom: 40px;
  }

  & > a {
    display: inline-flex;
    align-items: flex-start;
    gap: 8px;
    text-decoration: none;
    color: inherit;
    font-size: 1.6rem;
    margin-bottom: 1em;
    font-weight: 500;
    
    > svg {
      flex: 0 0 auto;
      transition: transform .3s;
    }

    &:hover {
      color: var(--color-primary);
      > svg {
        //stroke: var(--color-primary);
        transform: translateX(3px);
      }
    }


  }
`;