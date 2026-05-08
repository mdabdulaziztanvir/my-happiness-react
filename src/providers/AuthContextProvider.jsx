import { useState } from "react";
import AuthenticationContex from "../contexts/AutheticationContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(user);
  const logout = () => {
    localStorage.removeItem("savedUser");
    setUser(null);
  };

  const authInfo = {
    user,
    setUser,
    logout,
    isLoading,
    setIsLoading,
  };

  return (
    <AuthenticationContex.Provider value={authInfo}>
      {children}
    </AuthenticationContex.Provider>
  );
};

export default AuthContextProvider;
