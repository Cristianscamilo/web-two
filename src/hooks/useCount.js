import { useState } from "react";

export const useCount = (initial = 0, stock) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return {
    counter,
    addOne,
    subOne,
  };
};
