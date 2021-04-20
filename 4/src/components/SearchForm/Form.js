import React, { Component } from "react";
class Form extends Component {
  state = { query: "" };
  handleChange = ({ target: { value } }) => this.setState({ query: value });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="input"
          value={this.state.query}
          autoComplete="off"
          autoFocus
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <button type="submit">Find</button>
      </form>
    );
  }
}

export default Form;
