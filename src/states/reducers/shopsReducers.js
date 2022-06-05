import { GET_SHOPS_FAILED, GET_SHOPS_REQUEST, GET_SHOPS_SUCCESS } from "../constants/shopsConstants";

const initialShopsState = {
    shops: [],
    isLoading: false,
    error: null,
};
const shopsReducer = (state = initialShopsState, action) => {
    switch (action.type) {
        case GET_SHOPS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_SHOPS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                shops: action.payload,
                error: null
            };
        case GET_SHOPS_FAILED:
            return {
                ...state,
                isLoading: false,
                shops: [],
                error: action.payload,
            };


        default:
            return state;
    }
}

export default shopsReducer;