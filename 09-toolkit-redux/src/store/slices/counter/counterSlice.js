import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  counter: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 10 },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, actions) => {
      state.counter += actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementBy, decrement } = counterSlice.actions;
