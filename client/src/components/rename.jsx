import React from "react";
import axios from "axios";

class Rename extends React.Component {
  state = {
    message: "",
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://barkerfield-test.herokuapp.com/"
      );
      this.setState({ message: response });
    } catch {
      console.log("Couldn't reach the server");
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message.data}</h1>
        <h5>Rename models, components, and title</h5>
      </div>
    );
  }
}

export default Rename;
