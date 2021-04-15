import React, { FC } from "react";
import Menu from "../modules/Menu/Menu";
import ActionsWrapper from "./Actions/ActionsWrapper";
import { actionCreator } from '../PageConfigs/menuConfig';

const MenuPage: FC = () => (
   <ActionsWrapper
      actionCreatorFactory={actionCreator}
   >
      <Menu />
   </ActionsWrapper>
);

export default MenuPage
