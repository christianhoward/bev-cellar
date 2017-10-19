import axios from 'axios';
import { FETCH_USER, SUBMIT_BEV, FETCH_BEVS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBev = (bev) => async dispatch => {
    const res = await axios.post('/api/bevs', bev);
    dispatch({ type: SUBMIT_BEV, payload: res.data });
};

export const fetchBevs = () => async dispatch => {
    const res = await axios.get('/api/bevs');
    dispatch({ type: FETCH_BEVS, payload: res.data });
}