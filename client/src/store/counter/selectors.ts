import { createSelector } from "reselect";
import { ApplicationState } from "../configuration/constants";
import { CounterState } from "./constants";

export const counterSelector = createSelector<ApplicationState,CounterState, number>(
   (state) => state.counter,
   (count) => count.value,
)
