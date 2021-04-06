import React, { FC } from 'react';
import * as P from './parts';

const PageWrapper: FC = ({
   children
}) => (
   <P.Wrapper>
      <P.InnerWrapper>
         {children}
      </P.InnerWrapper>
   </P.Wrapper>
);

export default PageWrapper;
