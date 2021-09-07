import actionTypes from './filter-types';

export const setFilter = value => ({
    type: actionTypes.SET_FILTER,
    payload: value,
});
