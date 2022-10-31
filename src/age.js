import "./styles.css";
import {useState} from 'react';

export default function Age() {
  var currentYear = 2021;
  const [birthYear, setbirthYear] = useState(0);
  const [age, setAge] = useState(0);

  function clickHandler() {
    var theAge = currentYear - birthYear;
    setAge(theAge);
  }

  function inputChangeHandler(e) {
    setbirthYear(e);
  }

  return (
    <div className="App">
      <h1>Age</h1>
      <h2></h2>
      <input className="BT" onChange={(e) => inputChangeHandler(e.target.value)} />
      <div>
        {" "}
        <button className="BT" onClick={clickHandler}>Calculate Now</button>
      </div>

      <div>The age is: {age}</div>
    </div>
  );
}





