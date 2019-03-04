import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Address: "",
      Phonenumber: "",
      Property: ""
    };
  }

  handleChange = event => {
    let field = event.target.name; // field m name of that input file target kr lia h
    this.setState({
      [field]: event.target.value // field is dynamic here for all the  inputs
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    const { FirstName, LastName, Address, Phonenumber, Property } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          name="FirstName"
          value={FirstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="LastName"
          value={LastName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="Address"
          value={Address}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="Phonenumber"
          value={Phonenumber}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Property"
          name="Property"
          value={Property}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> Submit</button>
      </div>
    );
  }
}

export default Input;
