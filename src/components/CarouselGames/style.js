import styled from 'styled-components';
import theme from '../../ui/theme';

export const SliderRow = styled.div`
  position: relative;
  margin: ${props => !props.load ? '50px 0px' : '50px 1px'};

  .rec-carousel-wrapper {
    justify-content: flex-start;
    
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
    height: 80%;
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
  width: 327px;
  height: 214px;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin: 25px;
  margin-bottom: 20px;


  > div:last-child {
    max-width: fit-content;
    margin-left: auto;
    background: ${theme.colors.primary.secondary};
    padding: 5px 10px;
    border-radius: 100px;
  }
`;
export const Title = styled.h2`
  font-size: 18px;
  max-width: fit-content;
  text-transform: uppercase;

  @media ${theme.device.mobileL} {
    font-size: 24px;
  }
`;

export const BadgeTop = styled.div`
  height: 100%;
  padding: 7px 10px;
  border: 1px solid ${theme.colors.primary.light};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 12px;
`;