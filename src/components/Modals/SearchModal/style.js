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
  top: 50%;
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
  font-size: 42px;
  text-align: center;
  color: ${theme.colors.primary.light};
  background: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.primary.light};

  &:focus {
    outline: 0;
  }
`;
