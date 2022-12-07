import React from "react";
import './assets/css/App.css';
import Header from "./components/Header";
import Content from "./components/Content";
 
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;