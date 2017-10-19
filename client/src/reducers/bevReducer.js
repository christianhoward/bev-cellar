import { SUBMIT_BEV, FETCH_BEVS } from '../actions/types';

export default function(state=[], action) {
    switch (action.type) {
        case SUBMIT_BEV:
            return [
                ...state,
                action.payload
            ];
        case FETCH_BEVS:
            return action.payload;
        default:
            return state;
    }
}