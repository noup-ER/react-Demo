import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Test001 = () => {
  const [state] = useSelector((state) => [1]);

  const dispatch = useDispatch()

  console.log(state);

  return (
    <div
      onClick={() => {
        dispatch({ payload: 12, type: "1" });
      }}
    >
      hellohelo
    </div>
  );
};

export default Test001;
