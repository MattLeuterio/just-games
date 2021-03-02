import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`

`;

export const TitlePage = styled.div`
  font-size: 36px;
  z-index: 1;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;

  span {
    font-weight: 300;
    display: block;
    word-break: break-word;

    @media ${theme.device.tabletL} {
      display: inline;
    }
  }

  @media ${theme.device.tabletL} {
    font-size: 52px;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0;

  a {
    margin: 10px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonPagination = styled.button`
  background: transparent;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${theme.colors.primary.light};
  transition: all 0.2s;
  background: none;
  border: none;

  > span > svg {
    width: 40px;
    height: 40px;
    color: ${props => props.disabled ? 
      `${theme.colors.primary.gray}`
      : `${theme.colors.primary.primary}`}
  }
`;

export const Filters = styled.div`

  .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.colors.primary.darkAccent};
  }

  .MuiSelect-icon {
    color: ${theme.colors.primary.darkAccent};  
  }

  .MuiPaper-root {
    background: ${theme.colors.primary.darkAccent};
  }

  .MuiOutlinedInput-input {
    padding: 14.5px 14px
  }

  .MuiInputLabel-outlined {
    transform: translate(14px, 17.5px) scale(1);
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.colors.primary.secondary};
}
`;