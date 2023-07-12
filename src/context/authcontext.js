import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const loginn = (user) => {setCurrentUser({ user });};
 const logout=()=>{localStorage.clear()}

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, loginn,logout }}>
      {children}
    </AuthContext.Provider>
  );
};