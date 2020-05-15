import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Provider } from "react-redux";
import store from "./Store";
import { CssBaseline } from "@material-ui/core";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root"),
);

// f you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
