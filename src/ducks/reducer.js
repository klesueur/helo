import axios from 'axios'


const initialState = {
    //Should I be holding empty {} in properties below?
    username: 'saltcuzzi',
    profilePicture: 'https://robohash.org/24.218.243.24.png',
    userId: null
}

const LOGIN = 'LOGIN'

export function loginUser(userId, username, profilePicture) {
    return {      
        type: LOGIN,
        payload: {userId, username, profilePicture}
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

