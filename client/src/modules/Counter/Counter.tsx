import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSelector } from '../../store/counter/selectors';
import * as A from '../../store/counter/actions';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
      <>
         <Helmet>
            <title>Counter</title>
            <meta name="description" content={'this is counter'} />
         </Helmet>
         <div>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
            <button onClick={onIncrementByCount}>increment by count</button>
            <input type="number" onChange={onChange} />
            <Link to={'/'}>Home</Link>

            <p>{count}</p>
         </div>
      </>
   )
};

export default Counter;