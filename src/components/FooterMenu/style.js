import styled from 'styled-components';
import theme from '../../ui/theme';

export const MenuElements = styled.div`
  display: flex;
  flex-direction: column;

  a {
    
    &:not(:last-child) {
      margin-bottom: 14px;
    }

    &.menuActive {
      color: ${theme.colors.primary.primary};
    }
  }
`;