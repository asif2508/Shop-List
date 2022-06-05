import { GET_SHOPS_FAILED, GET_SHOPS_REQUEST, GET_SHOPS_SUCCESS } from "../constants/shopsConstants"

const getAllShops = () => async (dispatch) =>{
    dispatch({type: GET_SHOPS_REQUEST});
    fetch('http://localhost:5000/shops')
    .then(res => {
        if(res.ok){
            return res.json();
        }else{
            dispatch({type: GET_SHOPS_FAILED})
        }
    })
    .then(data => dispatch({type: GET_SHOPS_SUCCESS, payload: data}))

};
export default getAllShops;