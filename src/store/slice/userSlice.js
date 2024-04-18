import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "contact",
  initialState: { todo: [], editDo: {} },
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: Date.now(),
        name: action.payload.name,
        number: action.payload.number,
      };
      state.todo.push(data);
    },
    removeUser: (state, action) => {
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    },
    selectEdit: (state, action) => {
      return {
        ...state,
        editDo: state.todo.filter((item) => item.id === action.payload)[0],
      }
    },
  },
});

export const { addUser, removeUser, selectEdit } = userSlice.actions;
export default userSlice.reducer;
