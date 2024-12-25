import { createSlice } from '@reduxjs/toolkit';

// Initial state for guests
const initialState = [
  { id: 1, name: 'Jay singh', email: 'jaysingh@example.com' },
  { id: 2, name: 'shubham rai', email: 'shubhamRai@example.com' },
  { id: 3, name: 'Rahul singh', email: 'Rahul.singh@example.com' },
  { id: 4, name: 'abhijeet chauhan', email: 'abhijeetChauhan@example.com' },
  { id: 5, name: 'sourabh singh', email: 'sourabh.singh@example.com' },
  { id: 6, name: 'nisha singh', email: 'nishasingh@example.com' },
];

// Create a slice for guest list
const guestSlice = createSlice({
  name: 'guests',
  initialState,
  reducers: {
    addGuest: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addGuest } = guestSlice.actions;
export default guestSlice.reducer;