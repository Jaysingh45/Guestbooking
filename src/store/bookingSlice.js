import { createSlice } from '@reduxjs/toolkit';

// Initial state for booking
const initialState = {
  id: 1,
  guests: [],
};

// Create a slice for booking management
// there will be two reducer :- 1. is for add guest and 2. is for remove guest
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addGuestToBooking: (state, action) => {
      state.guests.push(action.payload);
    },
    removeGuestFromBooking: (state, action) => {
      state.guests = state.guests.filter(guest => guest.id !== action.payload.id);
    },
  },
});

export const { addGuestToBooking, removeGuestFromBooking } = bookingSlice.actions;
export default bookingSlice.reducer;