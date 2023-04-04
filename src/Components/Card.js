import "./Card.css";

function Card(props) {
  const classes = ["card" , props.className].join(" ");
  return <dev className={classes}> {props.children} </dev>;
}

export default Card;
