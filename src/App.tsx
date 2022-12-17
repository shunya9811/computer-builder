import React from "react";
import './assets/css/App.css';
import Header from "./components/Header";
import Content from "./components/Content";

import { PcContextProvider } from "./context";

function App() {
  return (
    <PcContextProvider>
      <div className="App">
        <Header />
        <div>
          <Content />
        </div>
      </div>
    </PcContextProvider>
  );
}

export default App;