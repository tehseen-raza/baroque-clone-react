import React, { useReducer } from 'react'

// useReducer Hook

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state

    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>Counter - {count}</div>

            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </>
    )
}

export default Counter;