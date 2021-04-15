import React, { FC } from "react";
import Home from "../modules/Pages/Home/Home";
import ActionsWrapper from "./Actions/ActionsWrapper";
import { actionCreator } from '../PageConfigs/homeConfig';

const HomePage: FC = () => (
   <ActionsWrapper
      actionCreatorFactory={actionCreator}
   >
      <Home />
   </ActionsWrapper>
);

export default HomePage
