import {createSelector} from 'reselect';


const selectUser =  state => state.user;

export const getTheUserSelector = createSelector(
    [selectUser],
    user => user.currentUser
) 