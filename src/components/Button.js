import React from "react";

const Button = (props) => {
  console.log(props);
  const { children, handleClick, data } = props;
  const clickHandler = () => {
    console.log("handle click");
    handleClick?.(props.data);
  
  };
  console.log("data", data);
  return (
    <>
      <button onClick={clickHandler}>{children}</button>+{data?.a?.b?.c}
    </>
  );
};

export default Button;
