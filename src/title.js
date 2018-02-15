import React, { Component } from "react";

//no curly brackets - implicit return. Works with only one element being returned.
//curly brackets - many elements being returned

function Title(props) {
  console.log(props);
  return Object.keys(props).map(key => <h1>{props[key].content.title}</h1>);
}

export default Title;
