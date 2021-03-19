export enum CounterActionType {
   Decrement = 'DECREMENT',
   Increment = 'INCREMENT',
   IncrementByCount = 'INCREMENT_BY_COUNT',
   IncrementByCountRequest = 'INCREMENT_BY_COUNT_REQUEST',
}

export type CounterAction = {
   type: CounterActionType.Increment;
} | {
   type: CounterActionType.Decrement;
} | {
   type: CounterActionType.IncrementByCount;
   count: number;
} | {
   type: CounterActionType.IncrementByCountRequest;
   count: number;
}

export interface CounterState {
   value: number;
}

export const initialState = {
   value: 0
}
