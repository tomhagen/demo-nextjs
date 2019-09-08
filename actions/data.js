import * as types from '../constants/dataTypes';
import Axios from 'axios';

export const requestGetData = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'https://api.exchangeratesapi.io/latest'
        })
            .then(res => {
                console.log(res.data.rates);
                dispatch(actGetData(res.data))

            })
            .catch(err => console.log(err))
    }
}

export const actGetData = data => {
    return {
        type: types.GET_DATA,
        payload: data
    }
}