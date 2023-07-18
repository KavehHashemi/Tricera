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
      state.userId = action.payload;
    },
  },
});
export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
