import React, { Component } from "react";
import Title from "./title";

class FetchCall extends Component {
  constructor() {
    super();
    this.state = {
      newsfeed: {}
    };
  }

  componentDidMount() {
    fetch(
      "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json"
    )
      .then(results => results.json())
      .then(results => {
        this.setState({
          newsfeed: results.data.feed
        });
      });
  }

  //Order: lifecycle methods at top, custom functions after lifecycle. Then render() is last.
  //spread operator can be used on arrays and objects. Take all the items in array and return
  //add other properties into a new array

  render() {
    const extraProps = { ...this.state, loading: true };
    return <Title {...this.state.newsfeed} />;
  }
}

export default FetchCall;
