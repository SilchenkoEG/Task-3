import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import App from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

