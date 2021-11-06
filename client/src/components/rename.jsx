import React from "react";
import axios from "axios";

class Rename extends React.Component {
  state = {
    message: "",
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:8000");
      this.setState({ message: response });
    } catch {
      console.log("Couldn't reach the server");
    }
  }
  displayState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h3>Press button to console.log server response</h3>
        <button onClick={this.displayState}>
          Verify componentDidMount GET request
        </button>
      </div>
    );
  }
}

export default Rename;
