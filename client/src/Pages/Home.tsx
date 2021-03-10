import React, { FC } from "react";
import { Helmet } from "react-helmet";
import zdie from '../../assets/zdie.png';

export const Home: FC = () => {
   const onClick = () => {
      console.log('i working');
   }
   return (
      <>
         <Helmet>
            <title>My first client title</title>
            <meta name="description" content={'this is my firs client met description'} />
         </Helmet>
         <h1>My React and TypeScript App!</h1>
         <img src={zdie}></img>
         <button onClick={onClick}>my button</button>
      </>
   );
}

export default Home
