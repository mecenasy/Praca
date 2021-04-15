import React, { FC } from 'react';
import { Menu } from '../../store/menu/constants';
import * as P from './parts';

interface MenuItem extends Menu {
   isSmall?: boolean;
   forceShow?: boolean;
}

const MenuItem: FC<MenuItem> = ({
   image,
   hidden,
   link,
   name,
   isSmall = false,
   forceShow = false,
}) => (
   <P.Link
      to={link}
      isHidden={Boolean(hidden && !forceShow)}
      isSmall={isSmall}
   >
      <P.Box >
         <P.Image src={image} />
         {!isSmall && <P.Text>{name}</P.Text>}
      </P.Box>
   </P.Link >
);

export default MenuItem;
