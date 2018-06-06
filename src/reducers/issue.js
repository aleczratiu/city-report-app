import { ISSUE } from '../actions/constants';

export const issue = (state = {}, action) => {
    switch (action.type) {
        case ISSUE.ADD_ISSUE:
            return {...state, ...action.payload};
        default:
            return state;
    };
};
