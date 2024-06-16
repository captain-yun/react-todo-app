const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return action.payload;
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};

export default todoReducer;