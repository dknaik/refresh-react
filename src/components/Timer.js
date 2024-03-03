import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(" I am  still running");
      setCount((prevData) => prevData + 1);
    }, 1000);

    return () => {
      console.log("when this component unmounts we will clear the setinterval");
      clearInterval(intervalId);
    };
  }, []);
//For every useEffect  the lean up function runs
  useEffect(()=>{
    return ()=>{
        console.log("cleaning up2nd effect for customtext")
    }
  },[props.customText])
  console.log("count", count);
  return (
  <>
  <div>Timer :{count}</div>
  <br/>
  <span>{props.customText}</span>
  </>

  );
};

export default Timer;
