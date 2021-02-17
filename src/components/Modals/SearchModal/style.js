import styled from 'styled-components';
import theme from '../../../ui/theme';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${props => props.open ? 'block' : 'none'};
  background: ${theme.colors.gradients.primary};
  z-index: ${theme.zIndex.modal};
  transition: all 0.5s;

  > span:first-child {
    position: absolute;
    cursor: pointer;
    top: 30px;
    right: 30px;

    > svg {
      color: ${theme.colors.primary.light};
      height: 50px;
      width: 50px;
    }
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  width: 90%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  > span {
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  position: relative;
  padding: 10px 7%;
  width: 100%;
  font-size: 22px;
  text-align: center;
  color: ${theme.colors.primary.light};
  background: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.primary.light};

  @media ${theme.device.tabletL} {
    font-size: 56px;
  }

  &:focus {
    outline: 0;
  }
`;

export const SuggestionGames = styled.div`
  max-height: calc(100vh - 350px);
  width: 100%;
  //background: ${theme.colors.primary.dark};
  position: absolute;
  top: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  > a:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Game = styled.div`
  padding: 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  background: ${theme.colors.primary.transparentPrimary};
  border-radius: 100px;

  &:hover {
    background: ${theme.colors.primary.dark};
  }

  @media ${theme.device.mobileL} {
    padding: 10px 20px;
  }
`;

export const ImageBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  background-image: ${props => `url(${props.bgResult})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  > span,
  > div {
    margin-left: 5px;

  }

  > span > svg {
      color: ${theme.colors.primary.light};
      fill: ${theme.colors.primary.light};
  }
`;

