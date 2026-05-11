import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../../services/auth";
import { useAuthHook } from "../../hooks/UseAuthHook";
import { setAuthToken } from "../../api/apiInstance";

const Login = () => {
  const { setUser, setIsLoading } = useAuthHook();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    try {
      setError("");

      const res = await login(userData);
      setUser(res.user);
      setAuthToken(res.accessToken);

      setIsLoading(false);

      setUsername("");
      setPassword("");

      if (Number(res?.user?.adminValue) === 1) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="">
          <div className="login-icon text-[200px]">Login Form</div>
          <div className="login-form">
            <p className="login-success"></p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-3"
            >
              <label htmlFor="username" className="mt-3">
                Enter Username or Password
              </label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="border border-cyan-300 rounded "
                required
                autoComplete="username"
              />
              <label htmlFor="password" className="mt-3">
                Enter password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-cyan-300 rounded "
                required
                autoComplete="current-password"
              />
              <button
                type="submit"
                className="px-4 py-1 rounded bg-gray-50 w-fit border border-cyan-600 cursor-pointer hover:bg-gray-100"
              >
                Login
              </button>
            </form>
          </div>
          <p className="login-error-handle text-red-600 ">{error && error}</p>
          <div className="forgetPass-newAccount ">
            <p>
              Don't have a account?
              <Link
                to="/guest/signup"
                className="underline text-green-600 hover:text-green-700 active:outline active:outline-dashed"
              >
                Signup
              </Link>
            </p>
            <p>Forget Passwprd?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
