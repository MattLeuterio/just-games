import styled from 'styled-components';
import { HeaderHeight } from '../../const';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: calc( ${HeaderHeight}px + 50px);
  padding-bottom: 50px;
`;