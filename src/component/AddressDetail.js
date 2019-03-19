import React, { Component } from "react";
import "./AddressDetail.css";
class AddressDetail extends Component {
  handleChange = () => {};
  render() {
    return (
      <div className="outline">
        Personal Information
        <div className="row">
          <input
            type="text"
            name="FirstName"
            placeholder="FirstName"
            onChange={this.handleChange}
          />
          <input
            className="rightInput"
            type="text"
            name="LastName"
            placeholder="LastName"
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <input
            name="AddressLineNo1"
            placeholder="AddressLineNo.1"
            onChange={this.handleChange}
          />
          <input
            className="rightInput"
            type="text"
            name="AddressLineNo2"
            placeholder="AddressLineNo.2"
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="City"
            placeholder="City"
            onChange={this.handleChange}
          />
          <input
            className="rightInput"
            type="text"
            name="State"
            placeholder="State"
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="PhoneNumber"
            placeholder="PhoneNumber"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default AddressDetail;
