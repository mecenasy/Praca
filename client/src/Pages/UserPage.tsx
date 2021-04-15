import React, { FC } from "react";
import User from '../modules/Pages/User/User';
import { actionCreator } from '../PageConfigs/userConfig';
import ActionsWrapper from "./Actions/ActionsWrapper";

const HomePage: FC = () => (
   <ActionsWrapper
      actionCreatorFactory={actionCreator}
   >
      <User />
   </ActionsWrapper>
);

export default HomePage

