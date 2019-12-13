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

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 9639952daf4a0bb638fe9ecff076c1b2e5800a30`
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
