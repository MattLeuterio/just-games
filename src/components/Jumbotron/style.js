import styled from 'styled-components';
import theme from '../../ui/theme';

export const JumbotronContainer = styled.div`
  position: relative;
  height: ${props => props.type !== 'home' ? `80vh` : `90vh`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: ${props => props.type === 'home' ? `circle(190vh at 50% -100vh);` : 'none'};

  @media ${theme.device.tabletL} {
    padding-top: 0;
    flex-direction: row;
  }
`;

export const JumboBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.type === "game" ? 
    `${theme.colors.gradients.gameHeader}, url(${props.background})` 
    : `${theme.colors.gradients.card}, url(${props.background})`};
  clip-path: ${props => props.type !== 'game' ? `circle(180vh at 50% -100vh)` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Divider = styled.div`
  position: absolute;
  height: 75px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: ${theme.colors.primary.dark};
`;

export const ItemSlider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  background: ${props => `${theme.colors.gradients.card}, url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Info = styled.div`
  width: fit-content;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;

  > span:not(:last-child) {
    margin-right: 4px;
  }

  > span > svg {
    fill: ${theme.colors.primary.light};
    color: ${theme.colors.primary.light};
  }
`;

export const Button = styled.div`
  border: 1px solid ${theme.colors.primary.light};
  margin-top: 40px;
  padding: 7px 20px;
  border-radius: 6px;
  width: fit-content;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: ${theme.colors.primary.light};
    color: ${theme.colors.primary.dark};
  }
`;

// export const Quote = styled.div`
//   width: 100%;
//   z-index: 1;
//   padding: 0 25px;

//   @media ${theme.device.mobileL} {
//     width: 65%;
//     padding: 0 100px;
//   }
//   `;

// export const QuoteText = styled.div`
//   position: relative;
//   font-size: 20px;
//   font-style: italic;

//   &::before {
//     content: '"';
//     position: absolute;
//     top: -15px;
//     left: -22px;
//     font-size: 48px;
//     font-style: italic;

//     @media ${theme.device.tabletL} {
//     font-size: 80px;
//     top: -23px;
//     left: -38px;
//     }
//   }

//   @media ${theme.device.tabletL} {
//     font-size: 30px;
//   }
// `;

// export const QuoteAuthor = styled.div`
//   font-size: 14px;
//   font-weight: 700;
//   margin-top: 15px;
//   @media ${theme.device.tabletL} {
//     font-size: 24px;
//   }
// `;

// export const NewGames = styled.div`
//   width: 100%;
//   /* background: green; */
//   /* height: 100px; */
//   z-index: 1;
//   transform: translateY(120px);
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   & > a {
//     width: 327px;
//     height: 214px; 
//   }

//   & > a:not(:last-child) {
//     margin-bottom: 15px;
//   }
  
//   @media ${theme.device.tabletL} {
//     width: 35%;
//     transform: translateY(200px);
//   }
// `;

// export const TitleNewGames = styled.div`
//   font-size: 22px;
//   letter-spacing: 5px;
//   text-transform: uppercase;
//   margin-bottom: 15px;
// `;
