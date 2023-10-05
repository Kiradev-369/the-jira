import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  listProject: [],
};
const projectCategoryReducer = createSlice({
  name: "projectCategorySlice",
  initialState: defaultState,
  reducers: {
    setListProject: (state, action) => {
      state.listProject = action.payload;
    },
  },
});

export const { setListProject } = projectCategoryReducer.actions;
export default projectCategoryReducer.reducer;
