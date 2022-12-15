import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter, map, mergeMap } from "rxjs";
import { AppEpic } from "../store.config";

const initialState: { count: number; name: string } = {
  count: 0,
  name: "sayaku",
};

// Actions
export const increment = createAction<number>("todo/INCREMENT");
export const decrement = createAction<number>("todo/DECREMENT");
export const updateName = createAction<string>("todo/UPDATE_NAME");

// Async Actions
export const fetchData = createAction<undefined>("todo/FETCH_DATA");

// Epics
export const fetchUserEpic: AppEpic = (action$, store, { getUserName }) =>
  action$.pipe(
    filter(fetchData.match),
    mergeMap((action) =>
      getUserName().pipe(map((response) => updateName(response.name)))
    )
  );

/**
 * Slice
 */
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(increment, (state, action: PayloadAction<number>) => {
        return {
          ...state,
          count: state.count + action.payload,
        };
      })
      .addCase(decrement, (state, action: PayloadAction<number>) => {
        return {
          ...state,
          count: state.count - action.payload,
        };
      })
      .addCase(updateName, (state, action: PayloadAction<string>) => {
        return {
          ...state,
          name: action.payload,
        };
      });
  },
});

/**
 * Reducer
 */
export default todoSlice.reducer;
