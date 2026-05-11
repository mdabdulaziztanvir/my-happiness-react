import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getSingleUser, updateUser } from "../../../services/auth";

const UpdateUser = () => {
  const { id } = useParams();
  const [tryFormData, setTryFormData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    adminValue: 0,
  });
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getSingleUser(id);
        setTryFormData({
          name: res.user.name || "",
          username: res.user.username || "",
          email: res.user.email || "",
          phoneNumber: res.user.phoneNumber || "",
          adminValue: res.user.adminValue || 0,
        });
      } catch (error) {
        throw Error(error.response?.data?.message, { cause: error });
      }
    };
    getUser();
  }, [id]);

  const handleChange = (e) => {
    e.preventDefault();
    setTryFormData({ ...tryFormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUser(id, tryFormData);
      setUpdateSuccessMessage(res);
    } catch (error) {
      throw Error(error.response?.data?.message, { cause: error });
    }
  };
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h1>User Details</h1>
        <div className="flex items-center justify-center gap-3">
          {updateSuccessMessage && (
            <h1 className="text-lg text-green-500">
              {updateSuccessMessage?.message}
            </h1>
          )}
          <div>
            <Link
              className="border rounded px-3 py-2 bg-gray-300 hover:bg-gray-200 transition-all duration-300"
              to="/admin/users"
            >
              Back
            </Link>
          </div>
        </div>
      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="border mx-2"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={tryFormData.name}
        />
        <label htmlFor="username">username</label>
        <input
          className="border mx-2"
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={tryFormData.username}
        />
        <label htmlFor="email">email</label>
        <input
          className="border mx-2"
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={tryFormData.email}
        />
        <label htmlFor="adminValue">adminValue</label>
        <input
          className="border mx-2"
          type="number"
          id="adminValue"
          name="adminValue"
          onChange={handleChange}
          value={tryFormData.adminValue}
        />
        <label htmlFor="phoneNumber">phoneNumber</label>
        <input
          className="border mx-2"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
          value={tryFormData.phoneNumber}
        />
        <button className="border rounded bg-gray-300 hover:bg-gray-200 px-3 py-2 mt-2">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
