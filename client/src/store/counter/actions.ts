import { CounterAction, CounterActionType } from "./constants";

export const decrement = (): CounterAction => ({
   type: CounterActionType.Decrement,
});

export const increment= (): CounterAction => ({
   type: CounterActionType.Increment,
});

export const incrementCount = (count: number): CounterAction => ({
   type: CounterActionType.IncrementByCount,
   count,
});

export const incrementByCountRequest = (count: number): CounterAction => ({
   type: CounterActionType.IncrementByCountRequest,
   count,
});
