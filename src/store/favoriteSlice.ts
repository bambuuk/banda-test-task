import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as number[],
  reducers: {
    toggleFavorite: (state, action) => {
      const postId = action.payload;
      if (state.includes(postId)) {
        return state.filter((id) => id !== postId);
      } else {
        state.push(postId);
      }
    },
  },
});

const { actions, reducer } = favoritesSlice;
export default reducer;
export const { toggleFavorite } = actions;
