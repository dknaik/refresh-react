import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";
import { useCallback, useState } from "react";
function App() {
  const [state, setState] = useState("good morning");
  //since the index is all same from  1-5 it will not rerender the textcomponent
  //with the help of memo
  //but when you add ...preData at the end in the zeroth index new value comes and all previous data's index
  //also changes hence ,

  // But But  But we can fix it by using an unique id and whereever you can spread the prevData
  const handleClick =useCallback(() => {
    console.log("function clicked")
    console.log("before update state",state)

    setState((previousData)=>{
      console.log("previous data",previousData)
      return "Hllouserrrrrr!!!!!!"
    });
    //any state variable updation is asynchronous task
    console.log(" after update state",state)
    //This above state isudated the value asynchromously
     

    //Our button component will rerender at nce when page loades at first time
    // but second time  
  },[]);
  return (
    <div className="App">
      <div>
        React Hoooks
        <br />
        {state}
      </div>
      <Button handleClick={handleClick}>Click Me</Button>
    </div>
  );
}

export default App;
