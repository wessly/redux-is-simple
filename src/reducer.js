import { CALC_UP, CALC_DOWN, CALC_MULTIPLY, CALC_DIVIDE } from './actions'

export function calcApp(state = 0, action) {
    switch (action.type) {
        case CALC_UP:
            return state + 1;
        case CALC_DOWN:
            return state - 1;
        case CALC_MULTIPLY:
            return state * action.number;
        case CALC_DIVIDE:
            return state / action.number;
        default:
            return 0
    }
}