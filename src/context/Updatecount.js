import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext({});

const Updatecount = (props) => {
  const [count, setCount] = useState(0);
  const [lifecount,setlifecount]=useState(0);
  const [timecount,settimecount]=useState(0);

  return (
    <UserContext.Provider value={{ count,timecount,settimecount, setCount , lifecount ,setlifecount}}>
      {props.children}
    </UserContext.Provider>
  );
};

export const Getctx = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

export default Updatecount;
