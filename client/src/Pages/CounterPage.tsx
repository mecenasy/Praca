import React, { FC,  } from 'react';
import Counter from '../modules/Counter/Counter';
import { actionCreator } from '../PageConfigs/counterConfig';
import ActionsWrapper from './Actions/ActionsWrapper';

const HomePage: FC = () => (
   <ActionsWrapper
      actionCreatorFactory={actionCreator}>
      <Counter />
   </ActionsWrapper>
);

export default HomePage
