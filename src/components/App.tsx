import React from "react";
import { Provider } from "react-redux";

import Notes from "./Notes";
import configureStore from "../redux/Store";

const App = () => (
  <Provider store={configureStore()}>
    <Notes />
  </Provider>
);

export default App;
