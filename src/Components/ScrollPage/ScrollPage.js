import React, { Component } from "react";

export default class ScrollPage extends Component {
  state = {};
  componentDidMount() {
    let value = this.context;
    /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
  }
  render() {
    // console.log(`props`, this.props);
    return <div>22</div>;
  }
}
