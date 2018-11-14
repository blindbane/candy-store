import React, { Component } from "react";
import axios from "axios";
import TextInput from "../atoms/TextInput";
import ComboBox from "../atoms/ComboBox";
import "./VendorSignUp.css";

class VendorSignUp extends Component {
  state = {
    hello: null,
    firstName: "",
    lastName: "",
    company: "",
    webAddress: "",
    phoneNumber: "",
    candySpecialty: [],
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

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSelect = candySpecialty => {
    this.setState({
      candySpecialty
    });
  };

  handleSubmit = e => {
    console.log("SUBMIT BUTTON CLICK", {
      ...this.state,
      dateAdded: new Date()
    });
    e.preventDefault();
  };

  render() {
    const {
      hello,
      firstName,
      lastName,
      company,
      webAddress,
      phoneNumber
    } = this.state;
    return (
      <div className="VendorSignUp">
        VendorSignUp.js
        <h1>Hello, {hello || "..."}</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            id="firstName"
            value={firstName}
            handleChange={this.handleChange}
            label="First Name"
          />
          <TextInput
            id="lastName"
            value={lastName}
            handleChange={this.handleChange}
            label="Last Name"
          />
          <TextInput
            id="company"
            value={company}
            handleChange={this.handleChange}
            label="Company"
          />
          <TextInput
            id="webAddress"
            value={webAddress}
            handleChange={this.handleChange}
            label="Web Address"
          />
          <TextInput
            id="phoneNumber"
            value={phoneNumber}
            handleChange={this.handleChange}
            label="Phone Number"
          />
          <ComboBox id="candySpecialty" handleChange={this.handleSelect} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default VendorSignUp;
