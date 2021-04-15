import styled, { css, } from 'styled-components';
import BoxBase from '../Components/Box/Box';
import { Link as LinkBase } from "react-router-dom";

interface LinkProps {
   isSmall: boolean;
   isHidden: boolean;
}

export const Link = styled(LinkBase).withConfig({
   shouldForwardProp: (prop, defaultValidatorFn) => !['isSmall', 'isHidden'].includes(prop) && defaultValidatorFn(prop),
}) <LinkProps>`
   text-decoration: none;
   color: black;

   &:active, :visited, :hover {
      color: black;
   }

   ${({ isHidden }) => isHidden && css`
      display: none;
   `}

   ${({ isSmall }) => isSmall && css`
      margin: 8px;

      ${Box} {
         width: 36px;
         height: 36px;
         margin: 0;
      }

      ${Image} {
         width: 20px;
         height: 20px;
         margin: 0;
      }
   `}
`;

export const Box = styled(BoxBase)`
   width: 200px;
   height: 200px;
   background-color: #c9e4ff;
   flex-direction: column;

   &:hover {
      background-color: #aed3f8;
   }
`;

export const Image = styled.img`
   width: 70px;
   height: 70px;
   margin-bottom: 20px;
`;

export const Text = styled.div``;
