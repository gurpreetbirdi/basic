import React, { Component } from "react";
import { connect } from "react-redux";

class Child2 extends Component {
  render() {
    console.log("valueeeee", this.props.selectedValue);
    return (
      <div>
        {this.props.selectedValue.map((ele, index) => {
          console.log(index);
          return (<div key={index}> {ele.name} </div>);
        })}
        <button onClick = {this.props.hi}>hlo frnads</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedValue: state.inputText
  };
};
export default connect(mapStateToProps)(Child2);
