import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { getMenuSelector } from '../../store/menu/selectors';
import * as P from './parts';

const Menu: FC = ({
}) => {
   const { pathname } = useLocation();
   const menuItems = useSelector(getMenuSelector);

   const isMenuShow = !(pathname === '/' || pathname === '/login');

   return (
      <P.Wrapper show={isMenuShow} >
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
   )
};

export default Menu;
