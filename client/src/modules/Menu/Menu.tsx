import React, { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { getMenuSelector } from '../../store/menu/selectors';
import * as P from './parts';

const Menu: FC = ({
}) => {
   const [showCounter, setCounter] = useState(0);

   const { pathname } = useLocation();
   const { leftSide, rightSide } = useSelector(getMenuSelector);
   const onClick = useCallback(() => {
      setCounter((count) => ++count);

   }, [])
   const isMenuShow = !(pathname === '/' || pathname === '/login');

   return (
      <P.Wrapper show={isMenuShow} >
         <P.MenuWrapper onClick={onClick}>
            {leftSide.map(({ link, name, image, hidden }) => {
               if (hidden && showCounter < 5) {
                  return null;
               }

               return (
                  <P.Link key={link} to={link}>
                     <P.Box>
                        <P.Image src={image} alt={name} title={name} />
                     </P.Box>
                  </P.Link>
               )
            })}
         </P.MenuWrapper>
         <P.UserWrapper >
            {rightSide.map(({ link, name, image }) => (
               <P.Link key={link} to={link}>
                  <P.Box>
                     <P.Image src={image} alt={name} title={name} />
                  </P.Box>
               </P.Link>
            ))}
         </P.UserWrapper>
      </P.Wrapper>
   )
};

export default Menu;
