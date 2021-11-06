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
        <button onClick={this.displayState}>
          Console.log(this.state.message)
        </button>
      </div>
    );
  }
}

export default Rename;
