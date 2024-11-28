import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  id: null,
  username: null,
  isLoggedIn: null,
  role: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      const { id, username, role } = action.payload;
      state.id = id;
      state.username = username;
      state.role = role;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.id = initialAuthState.id;
      state.username = initialAuthState.username;
      state.role = initialAuthState.role;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
