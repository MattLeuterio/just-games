import styled from 'styled-components';
import theme from '../../ui/theme';

export const CardContainer = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 25px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.highlight ?
    `${theme.colors.gradients.blue}, url(${props.cover})`
    : `${theme.colors.gradients.card}, url(${props.cover})` 
  };
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  transition: all .250s ease-in-out;

  &:hover {
    background: ${props => !props.highlight &&
    `${theme.colors.gradients.blue}, url(${props.cover})`
    };
    transform: ${props => props.highlight && `translateY(-7px)`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  `;

export const Clip = styled.div`
  position: absolute;
  width: 120%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  display: ${props => props.show ? 'block' : 'none'};
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
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
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > span:not(:last-child) {
    margin-right: 4px;
  }

  > span > svg {
    fill: ${theme.colors.primary.light};
    color: ${theme.colors.primary.light};
  }
`;