import { LOGIN, LOGOUT } from './../actions'

export function loginApp(state = 0, action) {

    switch (action.type) {

        case LOGIN:

            return Object.assign({}, state, {
                status: action.status,
                id: action.id,
                username: action.username,
                level: action.level
            })

        case LOGOUT:

            return Object.assign({}, state, {
                status: 0,
                id: null,
                username: null,
                level: null
            })

        default:

            return Object.assign({}, state, {
                status: localStorage.getItem('auth') || 0,
                id: localStorage.getItem('auth_id') || null,
                username: localStorage.getItem('auth_username') || null,
                level: localStorage.getItem('auth_level') || null
            })
    }
}