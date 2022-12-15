import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './slices/todo.slice';


const rootReducer = combineReducers({
  todoStore: todoReducer
});

export default rootReducer;