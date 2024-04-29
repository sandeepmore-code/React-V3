import {useState} from "react";

function Counter (){
const [counter, setCounter] = useState(0)

function Increment () {
  if(counter < 10){
    setCounter(PreValue => PreValue +1);
  }
}

function Decrement(){
  if(counter>0){
    setCounter(PreValue => PreValue -1);
  }
}

function Reset (){
  setCounter(1)
}


return(
  <div>
    <h1>Counter- {counter} </h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement} >-</button>
    <button onClick={Reset}>Reset</button>
    
  </div>
  
)
}
export default Counter;