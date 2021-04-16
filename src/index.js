import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, BrowserRouter as Router, withRouter} from 'react-router-dom'
import App from "./App";

const rootElement = document.getElementById("root");

const AppWithRouter = withRouter(App);
ReactDOM.render(
  <StrictMode>
  <BrowserRouter>
<AppWithRouter />
</BrowserRouter>
  </StrictMode>,
  rootElement
);