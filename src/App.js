import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./Reducers/RootReducer";
import saga from './Saga/RootSaga'
import {Main} from "./Main/Main";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function App() {

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

sagaMiddleware.run(saga);

export default App;
