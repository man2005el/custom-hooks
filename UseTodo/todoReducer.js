

export const todoReducer = ( initialState = [], action = {} ) => {


    switch (action.type) {
        case '[TODO] ADD':
            
            return [...initialState, action.payload];

        case '[TODO] REMOVE':
            
                return initialState.filter(todo => todo.id !== action.payload);
                
        case '[TODO] DONE':
            
                return initialState.map(todo => {

                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done,
                        }
                    }

                    return todo;
                });        
    
        default:
            return initialState;
    }

}
