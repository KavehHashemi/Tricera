import { createSlice } from "@reduxjs/toolkit";

type urlProps = {
  isLightMode: boolean;
};

const initialState: urlProps = {
  isLightMode: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setLightMode: (state, action) => {
      state.isLightMode = action.payload;
    },
  },
});
export const { setLightMode } = modeSlice.actions;
export default modeSlice.reducer;
