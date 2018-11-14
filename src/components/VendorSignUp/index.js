import React, { Component } from "react";
import axios from "axios";
import TextInput from "../atoms/TextInput";
import "./VendorSignUp.css";

class VendorSignUp extends Component {
  state = {
    hello: null,
    firstName: "",
    lastName: "",
    company: "",
    webAddress: "",
    phoneNumber: "",
    candySpecialty: "",
    dateAdded: ""
  };

  componentDidMount() {
    axios
      .get("https://rnb57ee82f.execute-api.us-east-1.amazonaws.com/dev/api")
      .then(({ data: { hello } }) => {
        this.setState({
          hello
        });
      })
      .catch(err => {});
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      hello,
      firstName,
      lastName,
      company,
      webAddress,
      phoneNumber,
      candySpecialty
    } = this.state;
    return (
      <div className="VendorSignUp">
        VendorSignUp.js
        <h1>Hello, {hello || "..."}</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            id="firstName"
            value={firstName}
            handleChange={this.handleInputChange}
            label="First Name"
          />
          <TextInput
            id="lastName"
            value={lastName}
            handleChange={this.handleInputChange}
            label="Last Name"
          />
          <TextInput
            id="company"
            value={company}
            handleChange={this.handleInputChange}
            label="Company"
          />
          <TextInput
            id="webAddress"
            value={webAddress}
            handleChange={this.handleInputChange}
            label="Web Address"
          />
          <TextInput
            id="candySpecialty"
            value={candySpecialty}
            handleChange={this.handleInputChange}
            label="Candy Specialty"
          />
        </form>
      </div>
    );
  }
}

export default VendorSignUp;
