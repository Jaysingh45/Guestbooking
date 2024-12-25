
import './App.css';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGuests } from './store/store';
import { selectBooking } from './store/store';
import { addGuestToBooking, removeGuestFromBooking } from './store/bookingSlice';


function App() {

  const dispatch = useDispatch();

  // Get guests and booking from Redux store
  const guests = useSelector(selectGuests);
  const booking = useSelector(selectBooking);

  const handleAddGuest = (guest) => {
    dispatch(addGuestToBooking(guest));
  };

  const handleRemoveGuest = (guest) => {
    dispatch(removeGuestFromBooking(guest));
  };

  return (
    <>
 <div className="App">
      <h1>Guest List</h1>

      <div>
        <h2>Guests</h2>
        
        <ul>
        
          {guests.map((guest) => ( //to collect data of guests
            <li key={guest.id}>
              {guest.name} ({guest.email}) 
              <button onClick={() => handleAddGuest(guest)}>Add to Booking</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Booking</h2>
        <ul>
          {booking.guests.map((guest) => (
            <li key={guest.id}>
              {guest.name} ({guest.email}) 
              <button onClick={() => handleRemoveGuest(guest)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
