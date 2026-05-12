import { useState } from "react";
import { passwordChange, validateOtp } from "../../services/auth";

const NewPassword = () => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordChangeError, setPasswordChangeError] = useState("");
  const [validOtpMessage, setValidOtpMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState("");
  const [isTrueOtp, setIsTrueOtp] = useState(false);

  const userUuid = sessionStorage.getItem("id");
  console.log(userUuid);
  const formData = {
    validateOtp: otp,
    userUuid,
  };
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    // Handle OTP submission logic here
    try {
      const res = await validateOtp(formData);
      setValidOtpMessage(res.message);
      setIsTrueOtp(true);

      return res;
    } catch (error) {
      setOtpError(error);
    }
  };
  console.log(otp);
  const handleChangeformData = {
    validateOtp: otp,
    userUuid,
    newPassword: password,
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await passwordChange(handleChangeformData);
      setPasswordChangeSuccess(res.message);
      setPassword("");
      console.log(res);
      return res;
    } catch (error) {
      setPasswordChangeError(error);
    }
  };
  return (
    <div>
      Enter the otp Which sent to your mail
      {otpError && <h3 className="text-red-500">{otpError?.message}</h3>}
      <form onSubmit={handleOTPSubmit}>
        <label htmlFor="otp">Enter OTP:</label>
        <input
          type="text"
          id="otp"
          name="otp"
          onChange={(e) => setOtp(e.target.value)}
          value={otp}
          className="border rounded h-9"
        />
        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-200 border border-gray-600 ms-3 px-4 py-2 rounded"
        >
          Submit OTP
        </button>
      </form>
      {validOtpMessage && <h3 className="text-green-500">{validOtpMessage}</h3>}
      {isTrueOtp && (
        <form onSubmit={handleChangePassword}>
          <label htmlFor="newPassword">Enter New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border rounded h-9 ms-3"
          />
          <button
            type="submit"
            className="bg-gray-300 hover:bg-gray-200 border border-gray-600 ms-3 px-4 py-2 rounded"
          >
            Change Password
          </button>
          {passwordChangeError && (
            <h3 className="text-red-500">{passwordChangeError?.message}</h3>
          )}
          {passwordChangeSuccess && (
            <h3 className="text-green-500">{passwordChangeSuccess}</h3>
          )}
        </form>
      )}
    </div>
  );
};

export default NewPassword;
