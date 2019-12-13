import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./users/App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import "antd/dist/antd.css";
import { sagas } from "./store/reducer";
import ApolloClient from "apollo-boost";

import {GITHUB_PERSONAL_ACCESS_TOKEN} from './config';

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    });
  }
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
