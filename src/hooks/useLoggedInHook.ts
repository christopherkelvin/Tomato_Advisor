import { useState } from "react";

export const UseLoggedInHook = () => {
  const [isLogged, setIsLogged] = useState(false);

  return {
    isLogged,
    setIsLogged,
  };
};
