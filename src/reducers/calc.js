import { CALC_UP, CALC_DOWN, CALC_MULTIPLY, CALC_DIVIDE } from './../actions'

export function calcApp(state = 0, action) {
    switch (action.type) {
        case CALC_UP:
            return Math.floor(state + 1)
        case CALC_DOWN:
            return Math.floor(state - 1)
        case CALC_MULTIPLY:
            return Math.floor(state * action.number)
        case CALC_DIVIDE:
            return Math.floor(state / action.number)
        default:
            return state
    }
}