import {createStore, applyMiddleware, combineReducers} from 'redux';
import { UserData } from './UserDataReducer';
import {  BookingConsultation } from './BookingConsultationReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            userdata : UserData,
            bookingconsultation : BookingConsultation 
            
            
        }),
        applyMiddleware(thunk, logger)

    );
    return store;
}