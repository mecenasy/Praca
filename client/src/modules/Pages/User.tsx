import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Home: FC = () => {
   const onClick = () => {
      console.log('i working');
   }
   return (
      <>
         <Helmet>
            <title>My first  title</title>
            <meta name="description" content={'this is my firs  met description'} />
         </Helmet>
         <h1>My React and  App!</h1>
         <Link to={'/'}>Home</Link>
         <button onClick={onClick}>my button</button>
      </>
   );
}

export default Home
