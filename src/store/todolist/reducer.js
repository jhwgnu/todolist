const initialState = []

const todolist_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case 'TOGGLE_TODO':
            // 이 라인 이해 잘 안됨
            return state.map(t => toggleTodo(t, action))

        default:
            return state
    }
}

export default todolist_reducer