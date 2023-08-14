import { createSlice } from '@reduxjs/toolkit';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  imageURL: string;
  username: string;
  isAdmin: boolean;
}; 

type UserSlice = {
  user: User | null;
  token: string;
}

const initialState: UserSlice = {
  user: null,
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
})

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
