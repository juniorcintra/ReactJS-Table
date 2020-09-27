import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./config/ReactotronConfig";
import { toast } from "react-toastify";
import { store, persistor } from "./store";

import history from "./services/history";
import Routes from "./routes";
import ScrollFixer from "./ScrollFixer";

import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Router history={history}>
          <ScrollFixer />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
