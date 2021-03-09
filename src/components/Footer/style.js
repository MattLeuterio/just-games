import styled from 'styled-components';
import theme from '../../ui/theme';
import { FooterHeight } from '../../const';
import Background from '../../ui/assets/img/footer-bg.jpg';

export const Container = styled.footer`
  position: relative;
  width: 100%;
  height: ${FooterHeight}px;
  background: ${theme.colors.gradients.primaryTransparent}, url(${Background});
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

  & > a:first-child {
    margin-top: 6px;

    & > div {
      cursor: pointer;
    }
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  margin-top: 20px;

  @media ${theme.device.tabletL} {
    margin: 0;
  }
`;

export const Link = styled.a`
  &:hover {
    color: ${theme.colors.primary.dark};
  }
`