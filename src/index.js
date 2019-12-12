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
        authorization: `Bearer 142aa7287b65f2e1cfae3c61842c80a083e32192`
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
