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
`;

export const GenrePill = styled.div`
  font-size: 12px;
  border: 1px solid ${theme.colors.primary.light};
  border-radius: 100px;
  padding: 9px 15px;

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

export const RowInfo = styled.div`
  width: 100%;
  margin-top: 80px;
  
  @media ${theme.device.tabletL} {
    display: flex;
  }
`;

export const About = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 50px;
  
  @media ${theme.device.tabletL} {
    padding: 0 50px;
    width: 50%;
    margin-bottom: 0;
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

export const Info = styled.div`
  width: 100%;
  padding: 0 20px;
  
  @media ${theme.device.tabletL} {
    width: 50%;
    padding: 0 50px;
  }
  `;

export const InfoContainer = styled.div`
  background: ${theme.colors.primary.dark};
  width: 100%;
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
`;