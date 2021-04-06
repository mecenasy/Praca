import React, { FC } from 'react';
import * as P from './parts';

const AppContainer: FC = ({
   children,
}) => (
   <P.AppContainer>
      {children}
   </P.AppContainer>
);

export default AppContainer;
