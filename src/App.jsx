import { useEffect } from "react";
import { useAuthHook } from "./hooks/UseAuthHook";

import RoutesManager from "./routes/Routes";
import { useNavigate } from "react-router";

const App = () => {
  const { setUser } = useAuthHook();
  const navigate = useNavigate();
  useEffect(() => {
    const savedUserLocal = localStorage.getItem("savedUser");
    if (!savedUserLocal) {
      if (!location.pathname.startsWith("/guest")) {
        navigate("/guest");
      }

      return;
    }
    const aaa = JSON.parse(savedUserLocal);
    setUser(aaa);
    navigate("/");
  }, [setUser, navigate]);
  return (
    <>
      <RoutesManager />
    </>
  );
};

export default App;
