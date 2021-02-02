import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  padding-top: 150px;
`;

export const Percent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;
export const CircleWrapper = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;
`;
export const Circle = styled.circle`
  width: 150px;
  height: 150px;
  fill: none;
  stroke-width: 10;
  stroke: ${theme.colors.primary.gray};
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke-linecap: round;
  transform: translate(5px, 5px);

  &:nth-child(1) {
    stroke-dashoffset: 0;
  }

  &:nth-child(2) {
    stroke-dashoffset: calc(440 - (440 * 87) / 100);
    stroke: ${theme.colors.primary.green};
  }
`;
export const Vote = styled.div`
  position: absolute;
  font-size: 58px;
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