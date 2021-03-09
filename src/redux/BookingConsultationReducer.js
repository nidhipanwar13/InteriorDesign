import * as ActionTypes from "./ActionTypes";
import { BOOKINGCONSULTATION } from '../shared/Consultationinfo';



export const BookingConsultation = (state = {
    errMess: null,
    bookings: []
}, action) => {
    switch(action.type) {

        case ActionTypes.ADDBOOKING_CONSULTATION:
            // console.log("Received payload: " + action.payload);
                var booking = action.payload;
                console.log(JSON.stringify(BOOKINGCONSULTATION));
                BOOKINGCONSULTATION.push(booking);
                console.log(JSON.stringify(BOOKINGCONSULTATION));
                // BookingConsultation.concat(newBooking);
                return { ...state, bookings: state.bookings.concat(booking)}; 

        default:
            return state;
    
}
};