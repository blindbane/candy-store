import React, { Component } from "react";
import axios from "axios";
import TextInput from "../atoms/TextInput";
import ComboBox from "../atoms/ComboBox";
import "./VendorSignUp.css";

class VendorSignUp extends Component {
  state = {
    submitError: null,
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
      .get(
        "https://rnb57ee82f.execute-api.us-east-1.amazonaws.com/dev/vendors/lol3"
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
    const { company, webAddress } = this.state;
    if (company && webAddress) {
      const vendorId = `${company}${webAddress.replace(".", "")}`;
      const submitBody = {
        ...this.state,
        vendorId,
        dateAdded: new Date()
      };
      console.log(submitBody);
      axios
        .post(
          "https://rnb57ee82f.execute-api.us-east-1.amazonaws.com/dev/vendors",
          submitBody
        )
        .then(res => {
          console.log(res);
          this.setState({
            submitError: null,
            firstName: "",
            lastName: "",
            company: "",
            webAddress: "",
            phoneNumber: "",
            candySpecialty: [],
            dateAdded: ""
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ submitError: "There was an error submitting." });
    }
    e.preventDefault();
  };

  render() {
    const {
      firstName,
      lastName,
      company,
      webAddress,
      phoneNumber,
      submitError
    } = this.state;
    return (
      <div className="VendorSignUp">
        VendorSignUp.js
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
          <h5>{submitError}</h5>
        </form>
      </div>
    );
  }
}

export default VendorSignUp;
