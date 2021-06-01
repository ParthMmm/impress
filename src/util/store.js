import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reduxThunk from "redux-thunk";

import reducers from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage: storage, // define which storage to use
  whitelist: ["user", "auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers); // create a persisted reducer

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  composeEnhancers(applyMiddleware(reduxThunk))
);

const persist = persistStore(store); // used to create the persisted store, persistor will be used in the next step

// const purge = () => {
//   return new Promise((resolve, reject) => {
//     // Purge RAM cached reducer states
//     store.dispatch({ type: "RESET" });

//     // Purge disk cached reducer states
//     const persistor = persist(store, {}, (err) => {
//       if (err) reject(err);
//       resolve();
//     });
//     persistor.purge(); // v5 returns a promise, might want to await
//   });
// };
export { store, persist };
