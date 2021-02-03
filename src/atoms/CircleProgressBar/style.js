import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  position: relative;
  width: ${props => props.sizeContainer}px;
  height: ${props => props.sizeContainer}px;
`;
export const CircleWrapper = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const Circle = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: ${props => props.widthStroke}px;
  stroke: ${theme.colors.primary.gray};
  stroke-dasharray: ${props => props.sizeStroke};
  stroke-dashoffset: ${props => props.sizeStroke};
  stroke-linecap: round;
  transform: translate(5px, 5px);

  &:nth-child(1) {
    stroke-dashoffset: 0;
  }

  &:nth-child(2) {
    stroke-dashoffset: calc(
      ${props => props.sizeStroke} - 
      (${props => props.sizeStroke} * ${props => props.vote}) / 100
      );
    stroke: ${props => props.vote <= 20 ? `${theme.colors.vote.red}` 
    : props.vote <= 40 ? `${theme.colors.vote.orange}` 
    : props.vote <= 60 ? `${theme.colors.vote.greenLight}`
    : props.vote <= 80 ? `${theme.colors.vote.greenDark}` :
    `${theme.colors.vote.green}`
  }
`;
export const Vote = styled.div`
  position: absolute;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary.light};
`;