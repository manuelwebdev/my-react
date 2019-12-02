import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Barry" heroName="the flash">
        <button>Action</button>
      </Greet>
      <Greet name="Hal" heroName="green lantern" />
      <Welcome name="Bruce" heroName="batman" />
      <Welcome name="Barry" heroName="the flash" />
      <Welcome name="Hal" heroName="green lantern" /> */}
    </div>
  );
}

export default App;
