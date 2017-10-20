import axios from 'axios';
import { FETCH_USER, SUBMIT_BEV, FETCH_BEVS, UPDATE_BEV, DELETE_BEV } from './types';

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

export const updateBev = (bev) => async dispatch => {
    const res = await axios.patch(`/api/bevs/${bev._id}`, bev);
    dispatch({ type: UPDATE_BEV, payload: res.data });
};

export const deleteBev = (id) => async dispatch => {
    const res = await axios.delete(`/api/bevs/${id}`);
    dispatch({ type: DELETE_BEV, payload: res.data });
};