import React, { useState } from "react";
import UserProgressContext from "./UserProgressContext";

const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setUserPorgress] = useState("");

  function showCart() {
    setUserPorgress("cart");
  }

  function hideCart() {
    setUserPorgress("");
  }

  function showCheckOut() {
    setUserPorgress("checkout");
  }

  function hideCheckOut() {
    setUserPorgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  console.log(userProgress);

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContextProvider;
