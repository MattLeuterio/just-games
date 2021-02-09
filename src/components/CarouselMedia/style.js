import styled from 'styled-components';
import theme from '../../ui/theme';

export const SliderRow = styled.div`
  position: relative;
  padding: ${props => !props.load ? '0px 0px' : '0px 1px'};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .rec-carousel-wrapper {
    & > div {
      &:hover {
        button {
          opacity: 1;
        }
      }

      button:first-child {
        border-radius: 0;
        left: 0;
      }
      button:last-child {
        border-radius: 0;
        right: 0;
      }
    } 
  }
  .rec.rec-arrow {
      border-radius: 0;
      position: absolute;
      z-index: 1;
      background: transparent;
      height: 100%;
      color: ${theme.colors.primary.primary};
      box-shadow: none;
      opacity: 0;
  }

  .rec.rec-arrow:hover {
    opacity: 1;
  }

  .rec.rec-arrow:disabled {
      visibility: hidden;
  }

  .rec-carousel-item:focus {
      outline: none;
      box-shadow: inset 0 0 1px 1px lightgrey;
  }
`;

export const CarouselItem = styled.div`
`;