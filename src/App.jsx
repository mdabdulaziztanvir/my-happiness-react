import { useEffect } from "react";
import { useAuthHook } from "./hooks/UseAuthHook";

import RoutesManager from "./routes/Routes";
import { useNavigate } from "react-router";

const App = () => {
  const { setUser, setIsLoading } = useAuthHook();
  const navigate = useNavigate();
  useEffect(() => {
    const savedUserLocal = localStorage.getItem("savedUser");
    if (!savedUserLocal) {
      if (!location.pathname.startsWith("/guest")) {
        navigate("/guest");
      }

      return;
    }
    try {
      const aaa = JSON.parse(savedUserLocal);
      setUser(aaa);
      console.log(aaa);
    } catch (error) {
      localStorage.removeItem("savedUser");
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [setUser, navigate, setIsLoading]);
  return (
    <>
      <RoutesManager />
    </>
  );
};

export default App;
