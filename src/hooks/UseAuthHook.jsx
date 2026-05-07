import { useContext } from "react";
import AuthenticationContex from "../contexts/AutheticationContext";

export const useAuthHook = () => {
  const authContext = useContext(AuthenticationContex);
  if (!authContext)
    throw new Error("wrap the app.jsx with AuthContextProvider");
  return authContext;
};
