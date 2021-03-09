import styled from 'styled-components';
import theme from '../../../ui/theme';

export const MenuElements = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.primary.gray};

  @media ${theme.device.tabletL} {
    flex-direction: row;
  }

  a {
    position: relative;
    
    &:not(:last-child) {
      margin-right: 25px;
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
  position: absolute;
  left: 50%;
  transform: translate(-50%, 8px);
  width: 130%;
  border: 1px solid ${theme.colors.primary.light};
`;