import { combineReducers } from 'redux'

import { calcApp } from './calc'
import { loginApp } from './login'

export default combineReducers({
    calcApp,
    loginApp
})