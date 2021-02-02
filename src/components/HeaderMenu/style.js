import styled from 'styled-components';
import theme from '../../ui/theme';

export const MenuElements = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.primary.gray};

  @media ${theme.device.tabletL} {
    flex-direction: row;
  }

  a {
    
    &:not(:last-child) {
      margin-right: 30px;
    }

    &.menuActive {
      color: ${theme.colors.primary.light};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Line = styled.div`
  width: 130%;
  margin-top: 8px;
  border: 1px solid ${theme.colors.primary.light};
`;