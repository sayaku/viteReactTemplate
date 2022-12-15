import { fakeApi } from "./fakeApi";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { createEpicMiddleware, Epic } from "redux-observable";
import { Action } from "@reduxjs/toolkit";
import { rootEpic } from "./epics";

// type definition
export type AppState = ReturnType<typeof rootReducer>; // for useSelector
export type AppDispatch = typeof store.dispatch;
export type AppEpic = Epic<Action, Action, AppState, typeof fakeApi>;

export const epicMiddleware = createEpicMiddleware<
  Action,
  Action,
  AppState,
  typeof fakeApi
>({
  dependencies: fakeApi,
});

// 透過 configureStore() 建立 Redux Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    epicMiddleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

epicMiddleware.run(rootEpic);
