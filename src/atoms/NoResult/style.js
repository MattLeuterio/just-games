import styled from 'styled-components';
import theme from "../../ui/theme";

export const NoResultCTN = styled.div`
  width: 100%;

  @media ${theme.device.tabletL} {
    width: ${props => props.widthCtn};
  }
`;