import { createSlice } from "@reduxjs/toolkit";

type userId = {
  userId: string | null;
};

const initialState: userId = {
  userId: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      console.log(`action.payload is ${action.payload}`);
      state.userId = action.payload;
      console.log(`state.userId is ${state.userId}`);
    },
  },
});
export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
