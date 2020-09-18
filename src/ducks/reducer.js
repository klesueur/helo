import axios from 'axios'


const initialState = {
    //Should I be holding empty {} in properties below?
    username: '',
    profilePicture: '',
    userId: null
}

const LOGIN = 'LOGIN'

export function loginUser(userId, username, profilePicture) {
    return {
        /* Should LOGIN below really be in strings? */
        type: LOGIN,
        /* Should this be an object below? (curly brackets) */
        payload: {userId, username, profilePicture}
    }
}


export default function reducer(state = initialState, action) {
    
    switch(action.type){
        case LOGIN:
            return { ...state, userId: action.payload, username: action.payload, profilePicture: action.payload }
        default: 
            return initialState
    }

}

