export const HOST = 'http://localhost:3001'

export const GUEST = 'GUEST'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const CALC_UP = 'UP'
export const CALC_DOWN = 'DOWN'
export const CALC_MULTIPLY = 'MULTIPLY'
export const CALC_DIVIDE = 'DIVIDE'


export function actionAddUp() {

    if (localStorage.getItem('auth_id')) {
        return { type: CALC_UP }
    }

    return { type: GUEST }
}

export const actionAddDown = {
    type: CALC_DOWN
}

export function actionAddMultiply(number) {
    return { type: CALC_MULTIPLY, number }
}

export function actionAddDivide(number) {
    return { type: CALC_DIVIDE, number }
}

export const actionLogin = (data) => {

    return dispatch => {

        login(data.username, data.password)
            .then(response => response.json())
            .then((data) => {
                if (data.status === 1) {
                    dispatch({ 
                        type: LOGIN, 
                        status: 1, 
                        id: data.info["id"],
                        username: data.info["username"], 
                        level: data.info["authlevel"] 
                    })
                    localStorage.setItem('auth', 1)
                    localStorage.setItem('auth_id', data.info["id"])
                    localStorage.setItem('auth_username', data.info["username"])
                    localStorage.setItem('auth_level', data.info["authlevel"])
                }
            })
    }
}

export function actionLogout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('auth_id')
    localStorage.removeItem('auth_username')
    localStorage.removeItem('auth_level')
    return { type: LOGOUT }
}

async function login(user, pass) {
    return await fetch(HOST + '/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user,
            password: pass
        })
    })
}