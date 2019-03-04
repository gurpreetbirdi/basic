import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInput } from "../action/ReduxInput.action";

class ReduxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      show: false
    };
  }
  handleSubmit = () => {
    this.props.dispatch(handleInput(this.state.FirstName));
    // action got dispatched and reducer will listen this action 
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };
  handleChange = event => {
    let field = event.target.name;
    this.setState({
      [field]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="FirstName"
          name="FirstName"
          value={this.state.FirstName}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> Submit</button>
        {this.state.show ? <div>{this.props.text}</div> : ""}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {text:state.inputText};
};

export default connect(mapStateToProps)(ReduxInput);
// connect mtd connect the store to the component , it is the only
// reason to get the dispatch. It provide dispatch to the component
