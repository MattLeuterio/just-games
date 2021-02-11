import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`

`;

export const GameHeader = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameTitle = styled.div`
  text-align: center;
`;

export const GameName = styled.h1`
  font-size: 30px;
  font-weight: 700;

  @media ${theme.device.tablet} {
    font-size: 50px;
  }
`;

export const GameDevs = styled.div`
  font-size: 18px;
  font-style: italic;
`;

export const Genres = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  @media ${theme.device.tabletL} {
    width: 50%;
  }
`;

export const GenrePill = styled.div`
  font-size: 12px;
  border: 1px solid ${theme.colors.primary.light};
  border-radius: 100px;
  padding: 9px 15px;
  margin-bottom: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }

`;

export const Vote = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.colors.primary.dark};
  padding: 10px;
  border-radius: 50%;
`;

export const Row = styled.div`
  width: 100%;
  margin-top: 80px;
  
  @media ${theme.device.tabletL} {
    display: flex;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 50px;
  
  @media ${theme.device.tabletL} {
    padding: 0 50px;
    width: 50%;
    margin-bottom: 0;
  }

  > div > span > svg {
    fill: ${theme.colors.primary.primary};
    color: ${theme.colors.primary.primary};
    width: 32px;
    height: 32px;
  }
`;


export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px 0;
  
  > span {
    margin-right: 10px;
  }
  `;

export const InfoContainer = styled.div`
  background: ${theme.colors.primary.dark};
  width: 100%;
  border-radius: 6px;
`;

export const InfoTitle = styled.div`
  background: ${theme.colors.gradients.primary};
  padding: 15px 30px;
  border-radius: 6px 6px 0 0;

  > div {
    color: ${theme.colors.primary.light};
  }
`

export const InfoGame = styled.div`
  padding: 20px 30px;
`;

export const InformationRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

export const NameInfo = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.colors.primary.primary};
  text-transform: uppercase;
  margin-right: 15px;
`;

export const ResultInfo = styled.span`
  font-weight: bold;
  
  > span:not(:last-child)::after,
    a:not(:last-child)::after{
    content: ", ";
  }

  a:hover {
    color: ${theme.colors.primary.primary};
  }
`;

export const Media = styled.div`
  width: 100%;
  height: 600px;
  padding-bottom: 1px;
  background: ${theme.colors.primary.dark};
  margin: 100px 0;
`;

export const MediaHeader = styled.div`
  width: 100%;
  height: 55px;
  background: ${theme.colors.gradients.primary};
  border-radius: 0 0 6px 6px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: center;

  @media ${theme.device.tabletL} {
    padding: 0 100px;
    justify-content: flex-start;
  }

  > div:first-child {
    color: ${theme.colors.primary.light};
    width: fit-content;
    margin-right: 30px;
  }
`;

export const NavMedia = styled.div`
  width: 80px;
  height: 100%;
  padding: 5px;
  cursor: pointer;
  background: ${props => props.selected ?
    `${theme.colors.primary.secondary}` :
    'transparent'
  };

  > span > svg {
    color: ${theme.colors.primary.light};
    width: 100%;
    height: 100%
  }
`;

export const CarouselsContainer = styled.div`
  width: 100%;
  height: calc(100% - 55px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoContainer = styled.div`
  width: 80%;
  height: 95%;
`;

export const StoresList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const LinkStore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid ${theme.colors.primary.light};
  border-radius: 6px;
  width: fit-content;
  margin-bottom: 10px;
  transition: all .2s;

  &:hover {
    background-color: ${theme.colors.primary.primary};
    transform: scale(1.08);
  }
  
  &:not(:last-child) {
    margin-right: 10px;
  }

  > span > svg {
    fill: ${theme.colors.primary.light};
  }

  > span,
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:  8px;
  }
`;

export const ShareButtons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  > button {
    margin: 0 10px 10px 0;
  }
`;

export const Series = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 50px 0;
  
  @media ${theme.device.tabletL} {
    padding: 0 50px;
    margin-bottom: 0;
  }

  > div > span > svg {
    color: ${theme.colors.primary.primary};
    fill: ${theme.colors.primary.primary};
    width: 32px;
    height: 32px;
  }
`;