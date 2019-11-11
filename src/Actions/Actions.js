export const todoActions = {
    addTodo(text = '') {
        return {
            type: 'ADD_TODO',
            text
        }
    },
    toggleTodo(index) {
        console.log("wekcome")
        return {
            type: 'TOGGLE_TODO',
            index
        }
    },
    editTodo(index, text) {
        return {
            type: 'EDIT_TODO',
            index,
            text
        }
    },
    removeTodo(index) {
        return {
            type: 'REMOVE_TODO',
            index
        }
    },
    clearTodos() {
        return {
            type: 'CLEAR_TODOS'
        }
    },
    countTodos() {
        return {
            type: 'COUNT_TODOS'
        }
    }
}

//Bucket Actions
export const bucketactions = {
    addBucket(text = '') {
        return {
            type: 'ADD_BUCKET',
            text
        }
    },
    editBucket(index, text) {
        return {
            type: 'EDIT_BUCKET',
            index,
            text
        }
    },
    removeBucket(index) {
        return {
            type: 'REMOVE_BUCKET',
            index
        }
    }
}