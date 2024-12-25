import { configureStore } from '@reduxjs/toolkit';
import guestReducer from './guestSlice';
import bookingReducer from './bookingSlice';

export const store = configureStore({
  reducer: {
    guests: guestReducer,
    booking: bookingReducer,
  },
});

export const selectGuests = (state) => state.guests;
export const selectBooking = (state) => state.booking;