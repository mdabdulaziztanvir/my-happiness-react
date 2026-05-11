// import { useEffect } from "react";
import { useAuthHook } from "./hooks/UseAuthHook";

import { useEffect } from "react";
import RoutesManager from "./routes/Routes";
import { apiInstance, setAuthToken } from "./api/apiInstance";
import { me } from "./services/auth";
// import { useNavigate } from "react-router";

const App = () => {
  const { setIsLoading, setUser } = useAuthHook();

  useEffect(() => {
    const persistLogin = async () => {
      try {
        const res = await apiInstance.post("/refresh");
        setAuthToken(res.data.accessToken);

        const resUser = await me();
        setUser(resUser.user);
        // fetch user data with /me
      } catch (error) {
        // setAuthToken("");
        // setUser(null);
        console.log("No valid refresh token found", error, { cause: error });
      } finally {
        setIsLoading(false);
      }
    };
    persistLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RoutesManager />
    </>
  );
};

export default App;
