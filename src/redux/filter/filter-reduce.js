import actionTypes from './filter-types';


const initialFilterState = {
    filter: '',
}

const filterReducer = (state = initialFilterState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_FILTER:
            return { ...state, filter: payload };
        default: return state;
    }
}
 
export default filterReducer;