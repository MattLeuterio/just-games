import styled from 'styled-components';
import theme from '../../../ui/theme';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  background: ${theme.colors.primary.secondary};
  z-index: ${theme.zIndex.mobileMenus};
  transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100vh)' };
  transition: all .5s ease-in-out;
`;

export const MenuElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100vh)' }; 
  transition: all .5s ease-in-out 0.1s;

  > a:not(:last-child) {
    margin-bottom: 25px;
  }

  > a.menuActive {
    color: ${theme.colors.primary.dark}
  }
`;