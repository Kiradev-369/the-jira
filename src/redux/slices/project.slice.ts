import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProject: [],
};
const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    setListProject: (state, action) => {
      state.listProject = action.payload;
    },
  },
});

export const { setListProject } = projectSlice.actions;
export default projectSlice.reducer;
