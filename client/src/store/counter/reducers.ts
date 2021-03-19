import * as C from './constants';

export const counterReducer = (state: C.CounterState = C.initialState, action: C.CounterAction): C.CounterState => {
   switch (action.type) {
      case C.CounterActionType.Increment: {
         return { value: state.value + 1 }
      }
      case C.CounterActionType.Decrement: {
         return { value: state.value - 1 }
      }
      case C.CounterActionType.IncrementByCount: {
         return { value: state.value + action.count }
      }
      default:
         return state
   }
}
