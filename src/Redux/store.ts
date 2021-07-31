import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {questionReducer} from "./Reducer/questionReducer"

export const store = createStore(questionReducer,applyMiddleware(thunk));

export type ReducerType = ReturnType<typeof questionReducer>




