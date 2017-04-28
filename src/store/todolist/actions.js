let nextTodoId = 0
export const addTodo = (text) => {
    // text를 받아서 수행될 action의 type과 인자들을 reducer로 전달함
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}