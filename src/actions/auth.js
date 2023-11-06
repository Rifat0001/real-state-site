import axios from "axios";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,

    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,

    LOGOUT,
} from "./types"

export const load_user = () => async dispatch =>{
    if(localStorage.getItem('access')){
        const config ={
            headers:{
                'Content-Type':'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`,
                'accept':'application/json'
            }
        };
        try {
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/users/me/`,config);
            
            dispatch({
                type:USER_LOADED_SUCCESS,
                payload:res.data
            })
          } catch (error) {
            dispatch({
                type:USER_LOADED_FAIL,
            })
          }
    }else{
        dispatch({
            type:USER_LOADED_FAIL,
        })
    }
};

export const checkAuthenticated = () => async dispatch =>{
    if(localStorage.getItem('access')){
        const config ={
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json'
            }
        };
        const body = JSON.stringify({token:localStorage.getItem('access')})
        try{
            const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/jwt/verify/`, body, config);

            if(res.data.code != 'token_not_valid'){
                dispatch({
                    type:AUTHENTICATED_SUCCESS
                })
            }else{
                dispatch({
                    type:AUTHENTICATED_FAIL
                })
            }
        }catch (err){
            dispatch({
                type:AUTHENTICATED_FAIL
            })
        }
    }else{
        dispatch({
            type:AUTHENTICATED_FAIL
        })
    }
}

export const login = (data) => async dispatch =>{
    dispatch({
        type:LOGIN_SUCCESS,
        payload:data
    })
    dispatch(load_user());
};

export const reset_password_confirm = (uid,token,new_password,re_new_password) => async dispatch => {
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    };
    const body = JSON.stringify({uid,token,new_password,re_new_password});
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/users/reset_password_confirm/`, body,config);
        
        dispatch({
            type:PASSWORD_RESET_CONFIRM_SUCCESS,
        })

        dispatch(load_user());
    } catch (error) {
        dispatch({
            type:PASSWORD_RESET_CONFIRM_FAIL,
        })
      }
} 

export const login_fail = () => dispatch =>{
    dispatch({
        type:LOGIN_FAIL,
    })
}

export const logout = () => dispatch =>{
    dispatch({
        type:LOGOUT
    })
}
