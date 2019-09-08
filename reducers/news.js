import * as types from '../constants/dataTypes';

let initialState = {};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA:
            let updateData = { ...state };
            updateData = action.payload;
            return updateData
        default: return { ...state }
    }
}
export default newsReducer