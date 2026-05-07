import { useAuthHook } from "../hooks/UseAuthHook";

const Home = () => {
  const { user } = useAuthHook();

  return (
    <div>
      welcome Home Dear,
      <span className="text-xl text-green-700">{user.username}</span>
      <h1>your name is : {user?.name}</h1>
    </div>
  );
};

export default Home;
