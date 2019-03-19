import React from "react";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import { connect } from "react-redux";
import { child } from "./../action/Child.action";

const bigList = [];

for (var i = 1; i <= 1000; i++) {
  bigList.push({ id: i, name: `Item ${i}` });
}
class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      arrayValue: []
    };
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }

  selectMultipleOption(value) {
    this.setState({ arrayValue: value });
  }

  handleSubmit = () => {
    this.props.dispatch(child(this.state.arrayValue))
    console.log("value", this.state.arrayValue)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Multi select</h3>
            <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={this.selectMultipleOption}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              dropdownHeight={300}
            />
            <button onClick= {this.handleSubmit}> Click Me</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {return{}
};
export default connect(mapStateToProps)(Child1);
