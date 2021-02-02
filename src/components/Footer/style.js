import styled from 'styled-components';
import theme from '../../ui/theme';
import { FooterHeight } from '../../const';
import Background from '../../ui/assets/img/footer-bg.jpg';

export const Container = styled.footer`
  position: relative;
  width: 100%;
  height: ${FooterHeight}px;
  background: linear-gradient(109.08deg,#8e2de0c4 12.85%,#4a00e0fa 87.15%), url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 90px 0;
  
  @media ${theme.device.tabletL} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 135px;
  }
`;

export const Copyright = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
`;

export const Link = styled.a``