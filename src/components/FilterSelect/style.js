import styled from 'styled-components';
import theme from '../../ui/theme';

export const SelectContainer = styled.div`
  
  .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.colors.primary.darkAccent};
  }

  .MuiSelect-icon {
    color: ${theme.colors.primary.darkAccent};  
  }

  .MuiPaper-root {
    background-color: ${theme.colors.primary.dark};

    > ul {
      padding-top: 80px;
      padding-bottom: 80px;
    }
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

  .MuiMenuItem-root {
    font-family: inherit;
    font-size: 14px;
  }

  .MuiList-padding {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

