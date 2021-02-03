import styled from 'styled-components';
import Background from '../../ui/assets/img/home-bg.jpg';
import theme from '../../ui/theme';

export const HomeContainer = styled.div`

`;

export const Jumbotron = styled.div`
  padding-top: 400px;
  margin-bottom: 300px;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${theme.device.tabletL} {
    padding-top: 0;
    margin-bottom: 260px;
    flex-direction: row;
  }
`;

export const JumboBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.colors.gradients.card}, url(${Background});  
  clip-path: circle(200vh at 50% -100vh);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${theme.device.mobileL} {
    clip-path: circle(200vh at 50% -100vh);
  }
`;

export const Quote = styled.div`
  width: 100%;
  z-index: 1;
  padding: 0 25px;

  @media ${theme.device.mobileL} {
    width: 65%;
    padding: 0 100px;
  }
  `;

export const QuoteText = styled.div`
  position: relative;
  font-size: 20px;
  font-style: italic;

  &::before {
    content: '"';
    position: absolute;
    top: -15px;
    left: -22px;
    font-size: 58px;
    font-style: italic;

    @media ${theme.device.tabletL} {
    font-size: 98px;
    top: -23px;
    left: -38px;
    }
  }

  @media ${theme.device.tabletL} {
    font-size: 30px;
  }
`;

export const QuoteAuthor = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
  @media ${theme.device.tabletL} {
    font-size: 24px;
  }
`;

export const NewGames = styled.div`
  width: 100%;
  /* background: green; */
  /* height: 100px; */
  z-index: 1;
  transform: translateY(120px);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a:not(:last-child) {
    margin-bottom: 15px;
  }
  
  @media ${theme.device.tabletL} {
    width: 35%;
    transform: translateY(200px);
  }
`;

export const TitleNewGames = styled.div`
  font-size: 22px;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;