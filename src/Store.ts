import { createStore, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducers/RootReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
    blacklist: ["notification"],
    key: "reactredux",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store: Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
