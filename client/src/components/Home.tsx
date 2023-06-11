import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setCurrentSet } from "../store/sets";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, user, logout, loginWithRedirect } =
    useAuth0();
  console.log(user);

  useEffect(() => {
    dispatch(setCurrentSet({ id: null, name: null }));
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : isAuthenticated ? (
        <>
          <button onClick={() => logout()}>logout from {user?.nickname}</button>
          <table>
            <thead>
              <tr style={{ backgroundColor: "cadetblue" }}>
                <th>username</th>
                <th>email</th>
                <th>name</th>
                <th>profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user?.nickname}</td>
                <td>{user?.email}</td>
                <td>{user?.phone_number}</td>
                <td>{user?.profile}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>login</button>
      )}
    </div>
  );
};

export default Home;
