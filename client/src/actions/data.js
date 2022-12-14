import {FETCH_ALL} from '../constants/actionTypes'

import * as api from '../api'

export const getDatas = () => async (dispatch) => {
    try {

        const {data} = await api.fetchDatasFromAPI();

        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
} 