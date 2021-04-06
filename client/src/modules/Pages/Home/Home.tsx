import React, { FC } from "react";
import { Helmet } from "react-helmet";
import * as P from './parts';
import { Link } from "react-router-dom";
import PageWrapper from "../../Components/Contaners/PageWrapper/PageWrapper";

export const Home: FC= () => (
   <PageWrapper>
      <Helmet>
         <title>System zarządzania uczelnianego</title>
         <meta name="description" content={'to jest system zarządzania uczelnianego'} />
      </Helmet>
      <P.Wrapper >
         <P.InnerWrapper >
            <P.BoxUser >
               <Link to={'/user'}>User</Link>
            </P.BoxUser>
         </P.InnerWrapper>
         <P.InnerWrapper  >
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
         </P.InnerWrapper>
      </P.Wrapper>
   </PageWrapper>
);

export default Home
