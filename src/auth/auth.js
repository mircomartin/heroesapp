import {LOGIN, LOGOUT} from '../types'

export const startLogin = (nombre) => {
    return (dispatch) => {
        try {
            dispatch(login(nombre))
        } catch (error) {
            console.log(error)
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        try {
            dispatch(logout())
        } catch (error) {
            console.log(error)
        }
    }
}

//no async functions
export const login = (nombre) => ({
    type: LOGIN,
    payload: nombre,
})

export const logout = () => ({
    type: LOGOUT,
})