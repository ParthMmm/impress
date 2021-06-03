import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "./util/store";
import LoadingScreen from "./components/Loaders/LoadingScreen";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<LoadingScreen message="Loading" pathname="/" />}
      persistor={persist}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
