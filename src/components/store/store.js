import { createStore } from 'redux';

export const ACTIONS = {
    INCREMENT : 'INCREMENT',
    DECREMENT : 'DECREMENT'
}

Object.freeze(ACTIONS)

const initialState = 0

const counter = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + 1            
        case ACTIONS.DECREMENT:
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter);

store.subscribe( () => console.log(store.getState()))

export const increment = () => {
    return{
        type: ACTIONS.INCREMENT
    }
}

export const decrement = () => {
    return{
        type: ACTIONS.DECREMENT
    }
}




export default store