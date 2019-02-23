import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfsForm extends Component {
    state = {
        name: "",
        age: "",
        height: ""
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddSmurf = () => {
        const { name, age, height } = this.state;
        this.props.createSmurf({ name, age, height });
        this.setState({ name: "", age: "", height: ""})
    };

    render() {
        return (
        <form>
            <input 
                className="input"
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
            />
            <input
                className="input"
                value={this.state.age}
                name="age"
                type="text"
                placeholder="Age"
                onChange={this.handleInputChange}
            />
            <input
                className="input"
                value={this.state.height}
                name="height"
                type="text"
                placeholder="Height"
                onChange={this.handleInputChange}
            />
            <button onClick={() => this.handleAddSmurf()} type="button">
                Submit Smurf lol
            </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingSmurf: state.creatingSmurf
  };
};

export default connect(mapStateToProps, { createSmurf })(SmurfsForm);