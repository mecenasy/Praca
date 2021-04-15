import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as P from './parts';
import PageWrapper from "../../Components/Contaners/PageWrapper/PageWrapper";
import { useSelector } from "react-redux";
import { getMenuSelector } from "../../../store/menu/selectors";
import MenuItem from "../../MenuItem/MenuItem";

export const Home: FC = () => {
   const { leftSide, rightSide } = useSelector(getMenuSelector);
   return (
      <PageWrapper >
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
               {leftSide.map((item) => (
                  <MenuItem
                     key={item.link}
                     {...item}
                  />
               ))}
               {leftSide.length % 2 === 1 && <P.EmptyBox />}
            </P.InnerWrapper>
            <P.InnerWrapper >
               {rightSide.map((item) => (
                  <MenuItem
                     key={item.link}
                     {...item}
                  />
               ))}
            </P.InnerWrapper>
         </P.Wrapper>
      </PageWrapper >
   )
};

export default Home
