import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // there is a space in "card ", in order to output "card expense-item"
  return <div className={classes}>{props.children}</div>;
};

// props.children - reserved props, we use it when we create wrapper component to wrap contents up in open/close tags

export default Card;
