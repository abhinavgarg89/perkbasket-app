import React from "react";
import NavBarTest from "./navbar";
import Register from "./Register";
import Loginscreen from "./Loginscreen";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Are you an employee?</h1>
        <a href="https://abhinavgarg89.typeform.com/to/Di4oGD">
          Request PerkBasket at your company!
        </a>
        <div>
          <h2>
            Create a perkprogram for your employee Give each person the perks
            they want and need.
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
