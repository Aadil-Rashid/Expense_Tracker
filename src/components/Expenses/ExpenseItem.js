import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// This is stateless/presentational/dumb component

// This is my first custom component (It is a simple function)
const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title);
  // let title = props.title;

  // const clickHandler = () => {
  //   setTitle('Title Updated by Developer');
  //   console.log(title);
  //   // title = 'Title changed'; 
  // };
  
  // In return statement we will right 'JSX' code: JavaScriptXML code
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount} </div>
      </div>
      {/* onClick is a special kind of prop */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
