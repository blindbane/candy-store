import React, { Component } from "react";
import axios from "axios";
import "./VendorSignUp.css";

class VendorSignUp extends Component {
  state = {
    hello: null
  };

  componentDidMount() {
    axios
      .get("https://rnb57ee82f.execute-api.us-east-1.amazonaws.com/dev/api")
      .then(({ data: { hello } }) => {
        this.setState({
          hello
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { hello } = this.state;
    return (
      <div className="VendorSignUp">
        VendorSignUp.js
        <h1>Hello, {hello || "..."}</h1>
      </div>
    );
  }
}

export default VendorSignUp;
