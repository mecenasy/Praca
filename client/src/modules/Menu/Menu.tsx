import React, { FC } from 'react';
import { Link } from "react-router-dom";
import * as P from './parts';

interface MenuProps {
   show: boolean;
}

const Menu: FC<MenuProps> = ({
   show,
}) => (
      <P.Wrapper show={show} >
         <P.MenuWrapper  >
            <P.Box >
               <Link to={'/counter'}>Counter</Link>
            </P.Box>
            <P.Box >
               <div>jhgsdjkg</div>
            </P.Box>
            <P.Box >
               <div>jhgsdjkg</div>
            </P.Box>
            <P.Box >
               <div>jhgsdjkg</div>
            </P.Box>
         </P.MenuWrapper>
         <P.UserWrapper >
            <P.Box >
               <Link to={'/user'}>User</Link>
            </P.Box>
         </P.UserWrapper>
      </P.Wrapper>
);

export default Menu;
