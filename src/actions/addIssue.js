import { ISSUE } from './constants';

export const addIssue = issue => ({
    type: ISSUE.ADD_ISSUE,
    payload: issue,
});
