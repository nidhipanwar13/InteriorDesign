import * as ActionTypes from './ActionTypes';
import { USERDATA } from '../shared/userdata';
import { BOOKINGCONSULTATION } from '../shared/Consultationinfo';

export const fetchUserdata = () => (dispatch) => {
    dispatch(loadingUserdata(true));
    setTimeout(() => {
        dispatch(showUserdata(USERDATA));
    }, 2000)

}

export const SendConsultationBooking = (fullname, phonenum, email, time) => (dispatch) => {

    const newBooking = {
        Fullname: fullname,
        Phonenum: phonenum,
        Email: email,
        Time: time
    }

    dispatch(SendBooking(newBooking));       
    }

export const loadingUserdata = () => ({
    type: ActionTypes.LOADING_USERDATA
});

export const failedUserdata = (errmess) => ({
    type: ActionTypes.FAILED_USERDATA,
    payload: errmess
});

export const showUserdata = (userdata) => ({
    type: ActionTypes.SHOW_USERDATA,
    payload: userdata
});

export const SendBooking = (newBooking) => ({
    type: ActionTypes.ADDBOOKING_CONSULTATION,
    payload: newBooking
});