import { createContext, useState } from "react";

// create context
export const counterContextObj = createContext();

function ContextProvider({ children }) {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <counterContextObj.Provider value={{ counter,increment,decrement}}>
      {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider;