import styled from 'styled-components';
import theme from '../../ui/theme';
import { HeaderHeight } from '../../const';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: ${HeaderHeight}px;
  background: ${props => props.scroll > 50 ? `${theme.colors.primary.secondary}` : `${theme.colors.gradients.navbar}`};
  z-index: ${theme.zIndex.menus};
  transition: background 750ms;

  > a:first-child > div {
    cursor: pointer;
  }

  > div > img {
    z-index: ${theme.zIndex.menus};
  }

  @media ${theme.device.tabletL} {
    padding: 0 50px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;

  > span {
    cursor: pointer;
  }

  > div {
    margin-left: 20px;
  }
`;