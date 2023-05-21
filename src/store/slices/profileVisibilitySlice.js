import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false
};

const postCreationSlice = createSlice({
  name: "profileVisibility",
  initialState,
  reducers: {
      toggleVisibility: (state) => {
        state.isVisible = !state.isVisible
    }
  },
});

const { actions, reducer } = postCreationSlice;

export const { toggleVisibility } = actions;

export default reducer;
