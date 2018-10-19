import React from "react";
import ReactDOM from "react-dom";
import { FormPage } from "./pages/FormPage";
import { FormPageDynamic } from "./pages/FormPageDynamic";

import "./styles.css";

function App() {
  return <FormPageDynamic />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
