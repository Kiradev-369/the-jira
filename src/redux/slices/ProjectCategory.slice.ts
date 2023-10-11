import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  projectCategory: [],
};
const projectCategoryReducer = createSlice({
  name: "projectCategorySlice",
  initialState: defaultState,
  reducers: {
    setCategoryProject: (state, action) => {
      state.projectCategory = action.payload;
    },
  },
});

export const { setCategoryProject } = projectCategoryReducer.actions;
export default projectCategoryReducer.reducer;
