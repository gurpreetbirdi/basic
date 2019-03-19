import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
class Parent extends Component {
  hi = () => {
    console.log("HI")
  }
  render() {
    return <div>I am Parent
      <Child1/>
      <Child2 hi= {this.hi}/>
    </div>;
  }
}
export default Parent;
