import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelector } from '../../../store/counter/selectors';
import * as A from '../../../store/counter/actions';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as P from './parts';
import PageWrapper from '../../Components/Contaners/PageWrapper/PageWrapper';

const Counter: FC = () => {
   const dispatch = useDispatch();
   const count = useSelector(counterSelector);

   const [writtenCount, setCount] = useState(0);
   const onIncrement = useCallback(() => {
      dispatch(A.increment());
   }, [dispatch]);

   const onDecrement = useCallback(() => {
      dispatch(A.decrement());
   }, [dispatch]);

   const onIncrementByCount = useCallback(() => {
      dispatch(A.incrementByCountRequest(writtenCount));
   }, [dispatch, writtenCount]);

   const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setCount(+event.target.value);
   }, []);

   console.log("🚀 ~ VARIABLES", VARIABLES)

   return (
      <PageWrapper>
         <Helmet>
            <title>Counter</title>
            <meta name="description" content={'to jest przykładowy counter prezentujący możiwości aplikacji'} />
         </Helmet>
         <P.CounterWrapper>
            <P.CounterInnerWrapper>
               <Link to={'/'}>Home</Link>
            </P.CounterInnerWrapper>
            <P.CounterInnerWrapper>
               <button onClick={onIncrement}>increment</button>
               <button onClick={onDecrement}>decrement</button>
               <button onClick={onIncrementByCount}>increment by count</button>
               <input type="number" onChange={onChange} />
            </P.CounterInnerWrapper>
            <P.CounterInnerWrapper>
               <p>wynik: ({count})</p>
            </P.CounterInnerWrapper>
         </P.CounterWrapper>
      </PageWrapper>
   )
};

export default Counter;
