import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signSuccess, signoutSuccess } = userSlice.actions;

export default userSlice.reducer;
