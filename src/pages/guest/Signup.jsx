import { useState } from "react";
import { Link } from "react-router";
import { signUp } from "../../services/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      phoneNumber,
      email,
      password,
    };
    try {
      setError("");
      const res = await signUp(userData);

      setSuccessMessage(res);
      setName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="">
          <div className="login-icon text-[200px] text-center">&#128722;</div>
          <div className="login-form">
            {successMessage && (
              <div className="login-success">
                {successMessage.message}
                <p>
                  {" "}
                  Your Username is:
                  <span className="text-green-400 text-2xl">
                    {"  "}
                    {successMessage.user.username}{" "}
                  </span>
                  Collect it for Login
                </p>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-3"
            >
              {/* name */}
              <label htmlFor="name" className="mt-3">
                Enter name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-cyan-300 rounded "
                required
                autoComplete="name"
              />
              {/* phonenumber */}
              <label htmlFor="phoneNumbr" className="mt-3">
                Enter Phone Numbr
              </label>
              <input
                type="numbr"
                id="phoneNumbr"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="border border-cyan-300 rounded "
                required
                autoComplete="phoneNumber"
              />
              {/* email */}
              <label htmlFor="email" className="mt-3">
                Enter email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-cyan-300 rounded "
                required
                autoComplete="email"
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
              Already have a account?
              <Link
                to="/guest/login"
                className="underline text-green-600 hover:text-green-700 active:outline active:outline-dashed"
              >
                Login
              </Link>
            </p>
            <p>Forget Passwprd?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
