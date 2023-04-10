import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.scss";

import { AuthProvider } from "react-oidc-context";
import { settings } from "./auth/settings";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider {...settings}>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
