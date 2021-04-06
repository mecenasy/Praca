
import React, { FC } from 'react';
import { BoxWithShadow } from './parts';

interface BoxWithShadowProps {
   className?: string;
}

const Box: FC<BoxWithShadowProps> = ({
   children,
   className,
}) => (
   <BoxWithShadow className={className}>
      {children}
   </BoxWithShadow>
);

export default Box;
