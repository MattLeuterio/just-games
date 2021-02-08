import styled from 'styled-components';
import theme from '../../ui/theme';

export const ContainerProgress = styled.div`
  width: ${props => `${props.sizeContainer}px`};
  height: ${props => `${props.sizeContainer}px`};

  > svg > .CircularProgressbar-text {
    font-weight: 700;
    dominant-baseline: central;
  }
`