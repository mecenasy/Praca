import React, { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { getMenuSelector } from '../../store/menu/selectors';
import MenuItem from '../MenuItem/MenuItem';
import * as P from './parts';

const Menu: FC = ({
}) => {
   const [showCounter, setCounter] = useState(0);

   const { pathname } = useLocation();
   const { leftSide, rightSide } = useSelector(getMenuSelector);

   const onClick = useCallback(() => {
      setCounter((count) => ++count);
   }, []);

   const isMenuShow = !(pathname === '/' || pathname === '/login');

   return (
      <P.Wrapper show={isMenuShow} >
         <P.MenuWrapper onClick={onClick}>
            {leftSide.map((item) => (
               <MenuItem
                  forceShow={item.link === '/' || !(item.hidden && showCounter < 5)}
                  isSmall
                  key={item.link}
                  {...item}
               />
            ))}
         </P.MenuWrapper>
         <P.UserWrapper >
            {rightSide.map((item) => (
               <MenuItem
                  forceShow
                  isSmall
                  key={item.link}
                  {...item}
               />
            ))}
         </P.UserWrapper>
      </P.Wrapper>
   )
};

export default Menu;
