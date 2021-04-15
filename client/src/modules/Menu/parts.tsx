import styled, { css } from 'styled-components';
import BoxBase from '../Components/Box/Box';
import { Link as LinkBase } from "react-router-dom";

export const Link = styled(LinkBase)`
   margin: 8px;
   text-decoration: none;
   color: black;

   &:active, :visited, :hover {
      color: black;
   }
`;

export const Image = styled.img`
   width: 20px;
   height: 20px;
`;

export const Wrapper = styled.div<{ show: boolean }>`
   display: flex;
   justify-content: space-between;
   width: 100%;
   background-color: #74aae0;
   box-shadow: 0 0 3px 1px #465b65;
   opacity: 0;
   transform: translateY(-100%);
   transition: all 300ms ease-in-out;

   ${({ show }) => show && css`
      opacity: 1;
      transform: translateY(0);
   `}
`;

export const Box = styled(BoxBase)`
   width: 36px;
   height: 36px;
   font-size: 10px;
   margin: 0;
   background-color: #c9e4ff;

   &:hover {
      background-color: #aed3f8;
   }
`;

export const MenuWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 100%;
`;

export const UserWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 100%;
`;

export const Counter = styled.div`
   transform: rotate(-45deg);
`;
