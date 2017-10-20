import { SUBMIT_BEV, FETCH_BEVS, UPDATE_BEV, DELETE_BEV } from '../actions/types';

export default function(state=[], action) {
    switch (action.type) {
        case SUBMIT_BEV:
            return [
                ...state,
                action.payload
            ];
        case FETCH_BEVS:
            return action.payload;
        case UPDATE_BEV:
            return state.map((bev) => {
                if (bev._id === action.payload._id) {
                    return [
                        ...bev,
                        ...action.payload
                    ];
                } else {
                    return bev;
                }
            });
        case DELETE_BEV:
            return state.filter((bev) => bev._id !== action.payload._id);
        default:
            return state;
    }
}