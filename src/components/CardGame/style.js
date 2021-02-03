import styled from 'styled-components';
import theme from '../../ui/theme';
import CardBg from '../../ui/assets/img/tlou-bg.jpg';

export const CardContainer = styled.div`
  width: 327px;
  height: 214px;
  padding: 25px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.highlight ?
    `${theme.colors.gradients.blue}, url(${CardBg})`
    : `${theme.colors.gradients.card}, url(${CardBg})` 
  };
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all .250s ease-in-out;

  &:hover {
    transform: translateY(-7px);
  }
  `;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const Category = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;

export const Platform = styled.div`
  max-width: 70%;
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
`;