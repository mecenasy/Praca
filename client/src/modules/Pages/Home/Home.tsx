import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as P from './parts';
import PageWrapper from "../../Components/Contaners/PageWrapper/PageWrapper";
import { useSelector } from "react-redux";
import { getMenuSelector } from "../../../store/menu/selectors";

export const Home: FC = () => {
   const { leftSide, rightSide } = useSelector(getMenuSelector);
   return (
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
            <P.InnerWrapper >
               {leftSide.map(({ link, image, name }) => (
                  <P.Link key={link} to={link}>
                     <P.Box >
                        <P.Image src={image} />
                        <div>{name}</div>
                     </P.Box>
                  </P.Link>
               ))}
               {leftSide.length % 2 === 1 && <P.EmptyBox />}
            </P.InnerWrapper>
            <P.InnerWrapper >
               {rightSide.map(({ link, image, name }) => (
                  <P.Link key={link} to={link}>
                     <P.Box >
                        <P.Image src={image} />
                        <div>{name}</div>
                     </P.Box>
                  </P.Link>
               ))}
            </P.InnerWrapper>
         </P.Wrapper>
      </PageWrapper >
   )
};

export default Home
