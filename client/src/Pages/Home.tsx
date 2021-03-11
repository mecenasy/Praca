import React, { FC } from "react";
import { Helmet } from "react-helmet";
import zdie from '../../assets/zdie.png';
import styled from 'styled-components';

const Div = styled.div`
width: 100px;
height: 100px;
background-color: blue;
`;

export const Home: FC = () => {
   console.log('i working', process.env.VARIABLES);
   const onClick = () => {
      console.log('i working', process.env.VARIABLES);
   }
   return (
      <>
         <Helmet>
            <title>My first client title</title>
            <meta name="description" content={'this is my firs client met description'} />
         </Helmet>
         <h1>My React and TypeScript App!</h1>
         <img src={zdie}></img>
         <Div>
            <button onClick={onClick}>my button</button>
         </Div>
      </>
   );
}

export default Home
