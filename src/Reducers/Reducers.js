import { initialTodos } from '../Components/InitialTodos'
import { initialBuckets } from '../Components/Bucket/InitialBuckets'

export function todos(state = initialTodos, action) {
    switch (action.type) {

        // Push a new todo with the action text
        // and a completed value of false
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

        // Mutate the todo that matches the action index
        // and toggle it's existing value to the opposite
        case 'TOGGLE_TODO':
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })

        // Mutate the todo that matches the action index
        // and change its text to the action text
        case 'EDIT_TODO':
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {
                        ...todo,
                        text: action.text
                    }
                } else {
                    return todo
                }
            })

        // Filters out the todo that matches the action index
        case 'REMOVE_TODO':
            return state.filter((todo, index) => {
                return index !== action.index
            })

        // Filters out completed todos
        case 'CLEAR_TODOS':
            return state.filter((todo) => {
                return !todo.completed
            })

        default:
            return state
    }
}

export function buckets(state = initialBuckets, action) {
    switch (action.type) {

        // Push a new todo with the action text
        // and a completed value of false
        case 'ADD_BUCKET':
            return [
                ...state,
                {
                    text: action.text
                }
            ]

        // Mutate the todo that matches the action index
        // and change its text to the action text
        case 'EDIT_BUCKET':
            return state.map((bucket, index) => {
                if (index === action.index) {
                    return {
                        ...bucket,
                        text: action.text
                    }
                } else {
                    return bucket
                }
            })

        // Filters out the todo that matches the action index
        case 'REMOVE_BUCKET':
            return state.filter((bucket, index) => {
                return index !== action.index
            })

        default:
            return state
    }
}