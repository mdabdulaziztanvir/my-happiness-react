import { useState } from "react";
import AuthenticationContex from "../contexts/AutheticationContext";
import { setAuthToken } from "../api/apiInstance";
import { logoutApi } from "../services/auth";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    await logoutApi();
    setUser(null);
    setAuthToken("");
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
