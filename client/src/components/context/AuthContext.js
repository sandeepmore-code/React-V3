import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

const InitialState = { user: null };

const AuthContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  const LOGIN = (data) => dispatch({ type: "LOGIN", payload: data });
  const LOGOUT = () => dispatch({ type: "LOGOUT" });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/auth/validate-token", {
          withCredentials: true,
        });
        if (response.data.success) {
          LOGIN(response.data.userData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ state, LOGIN, LOGOUT }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
