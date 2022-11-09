import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const AuhtSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeEmail, changePassword, changeName } = AuhtSlice.actions;
export default AuhtSlice.reducer;
