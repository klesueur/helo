import axios from 'axios'


const initialState = {
    //Should I be holding empty {} in properties below?
    username: '',
    profilePicture: '',
    userId: null
}

const LOGIN = 'LOGIN'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function loginUser(userId, username, profilePicture) {
    return {      
        type: LOGIN,
        payload: {userId, username, profilePicture}
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: null
    }
}


export default function reducer(state = initialState, action) {
    
    switch(action.type){
        case LOGIN:
            return { ...state, ...action.payload }
        default: 
            return state
    }

}

