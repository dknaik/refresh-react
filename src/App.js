import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";
import { useCallback, useState } from "react";
import Timer from "./components/Timer";
function App() {
  const [stoptimer, setStopTimer] = useState(true);
  const handleClick=()=>{
    setStopTimer(false)
  }
  return (
    <div className="App">
     <div>Use Effect hook</div>
     {stoptimer && <Timer customText="This isa Good clock"/>}
     {/* Event though you stop if no cleanup function setinterval willkeeponexecuting so clean up function is very important */}
      <Button handleClick={handleClick}>Stop timer</Button>
    </div>
  );
}

export default App;
