import { useState } from "react";
import AuthenticationContex from "../contexts/AutheticationContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("savedUser");
    setUser(null);
  };

  const authInfo = {
    user,
    setUser,
    logout,
  };

  return (
    <AuthenticationContex.Provider value={authInfo}>
      {children}
    </AuthenticationContex.Provider>
  );
};

export default AuthContextProvider;
