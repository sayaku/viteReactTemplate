import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { count: number; name: string } = {
  count: 0,
  name: "sayaku",
};

// Actions
export const increment = createAction<number>("todo/INCREMENT");
export const decrement = createAction<number>("todo/DECREMENT");

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
      });
  },
});


/**
 * Reducer
 */
 export default todoSlice.reducer;

