import { useState } from "react";
import { forgetPass } from "../../services/auth";
import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [forgetPassError, setForgetPassError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgetPass({ forgetCredit: emailOrUserName });
      setForgetPassError("");
      sessionStorage.setItem("id", res.otp);
      navigate("/guest/new-password");
      console.log(res.otp);
      return res;
    } catch (error) {
      setForgetPassError(error);
    }
  };
  return (
    <div>
      <form
        className="flex gap-3 items-center justify-start"
        onSubmit={handleSubmit}
      >
        <label htmlFor="emailUsername">Enter Email or Username</label>
        <input
          type="text"
          id="emailUsername"
          name="emailUsername"
          onChange={(e) => setEmailOrUserName(e.target.value)}
          value={emailOrUserName}
          className="border rounded h-9"
          required
        />
        <button className="border border-gray-600 bg-gray-300 hover:bg-gray-200 px-3 rounded py-2">
          Submit
        </button>
        {forgetPassError && (
          <h1 className="text-red-500">{forgetPassError?.message}</h1>
        )}
      </form>
    </div>
  );
};

export default ForgetPassword;
