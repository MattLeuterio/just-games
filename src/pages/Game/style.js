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