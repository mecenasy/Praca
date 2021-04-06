import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageWrapper from "../../Components/Contaners/PageWrapper/PageWrapper";
import * as P from './parts';

export const User: FC = () => {
   const onClick = () => {
      console.log('i working');
   };

   return (
      <PageWrapper>
         <Helmet>
            <title>User</title>
            <meta name="description" content={'user menu'} />
         </Helmet>
         <P.Wrapper>
            <h1>My React and App!</h1>
            <Link to={'/'}>Home</Link>
            <button onClick={onClick}>my button</button>
         </P.Wrapper>
      </PageWrapper>
   );
}

export default User;
