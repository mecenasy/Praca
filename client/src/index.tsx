import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

const App = () => (
   <h1>My React and TypeScript App!</h1>
);

ReactDOM.render(
   <StrictMode>
      <App />
   </StrictMode>,
   document.getElementById("app")
);
