import { combineEpics } from "redux-observable";
import { fetchUserEpic as TodoFetchUserEpic } from "./slices/todo.slice";

export const rootEpic = combineEpics(TodoFetchUserEpic);
