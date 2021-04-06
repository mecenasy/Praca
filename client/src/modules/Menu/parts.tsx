import styled, { css } from 'styled-components';
import BoxBase from '../Components/Box/Box';

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
   width: 50px;
   height: 50px;
   font-size: 10px;
   background-color: #c9e4ff;
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

