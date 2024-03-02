import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";
import { useState } from "react";
function App() {
  const [data, setData] = useState([
    {
      id: "a",
      text: "text 1",
    },
    {
      id: "b",
      text: "text 2",
    },
    {
      id: "c",
      text: "text 3",
    },
    {
      id: "d",
      text: "text 4",
    },
    {
      id: "e",
      text: "text 5",
    },
  ]);
  const handleClick = (data) => {
    setData((prevData) => [
      {
        id: Date.now().toString(),
        text: "text 6",
      },
      ...prevData,
    ]);
    // console.log("res", res);
  };
  //since the index is all same from  1-5 it will not rerender the textcomponent
  //with the help of memo
  //but when you add ...preData at the end in the zeroth index new value comes and all previous data's index
  //also changes hence ,

  // But But  But we can fix it by using an unique id and whereever you can spread the prevData
  return (
    <div className="App">
      <div>Component creationProps and childrens</div>
      <Button data={data} handleClick={handleClick}>
        Click Me
      </Button>

      <div>Render data and importanc of keys</div>
      {data.map((val, index) => (
        <Text text={val.text} key={val.id}></Text>
      ))}
    </div>
  );
}

export default App;
