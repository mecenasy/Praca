import styled from 'styled-components';
import BoxBase from '../../Components/Box/Box';

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   width: 670px;
   margin: auto;
   flex: 100%;
   overflow: visible;
`;

export const Box = styled(BoxBase)`
   width: 200px;
   height: 200px;
   background-color: #c9e4ff;
`;

export const BoxUser = styled(BoxBase)`
   width: 100%;
   height: 200px;
   background-color: #c9e4ff;
`;

export const InnerWrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   padding-top: 100px;
   width: 100%;
`;
