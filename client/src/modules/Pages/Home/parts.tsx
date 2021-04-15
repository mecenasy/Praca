import styled from 'styled-components';
import BoxBase from '../../Components/Box/Box';
import { Link as LinkBase } from "react-router-dom";

export const Link = styled(LinkBase)`
   text-decoration: none;
   color: black;

   &:active, :visited, :hover {
      color: black;
   }
`;

export const EmptyBox = styled(BoxBase)`
   width: 200px;
   height: 200px;
   visibility: hidden;
`;
export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   width: 670px;
   margin: auto;
`;

export const Box = styled(BoxBase) `
   width: 200px;
   height: 200px;
   background-color: #c9e4ff;
   flex-direction: column;

   &:hover {
      background-color: #aed3f8;
   }
`;

export const BoxUser = styled(BoxBase) `
   width: 100%;
   height: 200px;
   background-color: #c9e4ff;

   &:hover {
      background-color: #aed3f8;
   }
`;

export const Image =styled.img`
   width: 70px;
   height: 70px;
   margin-bottom: 20px;
`;

export const InnerWrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   padding-top: 50px;
   width: 100%;

   &:last-child {
      padding: 0;
   }
`;
