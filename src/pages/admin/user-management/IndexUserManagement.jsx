import { useEffect, useState } from "react";
import { deleteUser, getAllUser, makeAdmin } from "../../../services/auth";
import { Link } from "react-router";

const IndexUserManagement = () => {
  const [fetchUsers, setFetchUsers] = useState([]);
  const [makeAdminData, setMakeAdminData] = useState([]);
  const [deletedMessage, setDeletedMessage] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getAllUser();
        setFetchUsers(res.user);
        // console.log(fetchUsers);
        return;
      } catch (error) {
        console.error("error finding all users", error.message, {
          cause: error,
        });
      }
    };

    getUser();
  }, []);

  const handleAdminMake = async (id) => {
    try {
      const data = await makeAdmin(id);
      console.log(data);
      setMakeAdminData(data);
      setFetchUsers((prevUsers) => {
        return prevUsers.map((user) =>
          user.id === id ? { ...user, adminValue: 1 } : user,
        );
      });
    } catch (error) {
      console.error(error.response?.data?.message || "error");
    }
  };
  const handleDeleteUser = async (id) => {
    try {
      const res = await deleteUser(id);
      setDeletedMessage(res);
      console.log(res);
      setFetchUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      setIsError(error);
      console.error(error || "error");
    }
  };
  return (
    <div className="mt-4 border border-gray-50 rounded shadow ps-2 ">
      <div className="flex justify-between items-center">
        <h3 className="manage-user-banner text-xl font-bold">
          Manage Your Users
        </h3>
        {makeAdminData && (
          <h3 className="text-xl font-bold text-green-500">
            {makeAdminData?.message}
          </h3>
        )}
        {deletedMessage && (
          <h3 className="text-xl font-bold text-red-500">
            {deletedMessage?.user?.name} {deletedMessage?.message}
          </h3>
        )}
        {isError && (
          <h3 className="text-xl font-bold text-red-500">{isError?.message}</h3>
        )}
      </div>
      <table className="w-full">
        <thead className="bg-gray-300 text-left text-gray-700 ">
          <tr>
            <th className="border-2 border-gray-300 ps-2 py-2 text-lg ">ID</th>
            <th className="border-2 border-gray-300 ps-2 py-2 text-lg ">
              Name
            </th>
            <th className="border-2 border-gray-300 ps-2 py-2 text-lg ">
              Phone NO:
            </th>
            <th className="border-2 border-gray-300 ps-2 py-2 text-lg ">
              E-mail
            </th>
            <th className="border-2 border-gray-300 ps-2 py-2 text-lg ">
              Username
            </th>
            <th className="border-2 border-gray-300 ps-2 py-2 text-lg ">
              Admin
            </th>
            <th className="border-2 border-gray-300 ps-2 py-2 text-lg ">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {fetchUsers?.map((fetchUser) => (
            <tr
              className="even:bg-gray-300 odd:bg-gray-100  odd:hover:bg-gray-200 even:hover:bg-gray-400"
              key={fetchUser.id}
            >
              <td className="ps-2 py-2 border-s-2 border-gray-300">
                {fetchUser?.id}
              </td>
              <td className="ps-2 py-2 border-s-2 border-gray-300">
                {fetchUser?.name}
              </td>
              <td className="ps-2 py-2 border-s-2 border-gray-300">
                {fetchUser?.phoneNumber}
              </td>
              <td className="ps-2 py-2 border-s-2 border-gray-300">
                {fetchUser?.email}
              </td>
              <td className="ps-2 py-2 border-s-2 border-gray-300">
                {fetchUser?.username}
              </td>
              <td className="ps-2 py-2 border-s-2 border-gray-300 flex justify-center items-center">
                {fetchUser?.adminValue <= 0 ? (
                  <button
                    onClick={() => handleAdminMake(fetchUser.id)}
                    className="cursor-pointer italic font-bold text-[#5c961d] hover:text-[#3a6c04] border-none outline-none"
                  >
                    Make Admin
                  </button>
                ) : (
                  <p className="text-center">&#9989;</p>
                )}
              </td>
              <td className="ps-2 py-2 border-s-2 border-gray-300">
                <div className="flex justify-center items-center gap-3">
                  <div
                    className="text-red-100 cursor-pointer"
                    onClick={() => {
                      handleDeleteUser(fetchUser.id);
                    }}
                  >
                    &#10006;
                  </div>
                  <div className="text-2xl cursor-pointer">
                    <Link to={`/admin/users/${fetchUser.id}`}>&#9998;</Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexUserManagement;
