import React, {createContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    let [isAuth, setIsAuth] = useState(false);
    let [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (userFound) => {
        setIsAuth(true);
        setUser(userFound);
        navigate("/");
    }

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        navigate("/");
    }

  return (
    <AuthContext.Provider value={{isAuth, user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider