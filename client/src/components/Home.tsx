/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setCurrentSet } from "../store/sets";
import { setUserId } from "../store/user";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, user } = useAuth0();
  const owner = user?.sub?.split("|")[1];

  useEffect(() => {
    dispatch(setUserId(owner));
  }, [user]);

  useEffect(() => {
    dispatch(setCurrentSet({ id: null, name: null }));
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : isAuthenticated ? (
        <>
          <table>
            <thead>
              <tr style={{ backgroundColor: "cadetblue" }}>
                <th>username</th>
                <th>email</th>
                <th>avatar</th>
                <th>id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user?.nickname}</td>
                <td>{user?.email}</td>
                <td>
                  <img src={user?.picture}></img>
                </td>
                <td>{user?.sub?.split("|")[1]}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
