import React from "react";

const root = document.getElementById("root");
const span = React.createElement("h3", null, "Hello I'm span");
/* const btn = React.createElement("button", {
        onClick: ()=> console.log("i'm clicked")
    }, "Click me"); */
const App = () => {
  const data = React.useState();

  return (
    <div>
      <h3>current count is {}</h3>
      <button>Click me!</button>
    </div>
  );
};
ReactDOM.render(<App />, root);

ReactDOM.useState();
