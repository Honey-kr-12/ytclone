import * as api from '../api'
import { setCurrentUser } from './currentUser';

export const login = (authData) => async(dispatch) => {
    try {
        const {data} = await api.login(authData);
        dispatch({type:"AUTH",data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
        alert(error)
    }
}

export const fetchUserProfile = async (dispatch) => {
    try {
        const {data} = await api.fetchUserProfile();
        dispatch({type:"FETCH_PROFILE",data})
    } catch (error) {
        alert(error)
    }
  };

  export const updatePremiumData = (udata) => async(dispatch) => {
    try {
        const {_id} = udata;
        const {data} = await api.updatePremiumData(_id);
        console.log(data);
        dispatch({type:'UPDATE_PREMIUM', payload: data});
    } catch (error) {
        console.log(error);
    }
}