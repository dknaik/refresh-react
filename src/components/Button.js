import React, { memo } from "react";

const Button =memo((props) => {
  console.log("rendering button")
  const { children, handleClick, data } = props;
  const clickHandler = () => {
    console.log("handle click");
    handleClick?.();
  
  };
  console.log("data", data);
  return (
    <>
      <button onClick={clickHandler}>{children}</button>+{data?.a?.b?.c}
    </>
  );
});

export default Button;
