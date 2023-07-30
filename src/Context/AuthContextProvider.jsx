import React, {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    let [isAuth, setIsAuth] = useState(false);
    let [user, setUser] = useState({});
    const navigate = useNavigate();

    const login = (userFound) => {
        setIsAuth(true);
        setUser(userFound);
        navigate("/");
    }

    const logout = () => {
      setIsAuth(false);
      setUser({});
      navigate('/');
    };

    const addLearning = (program) => {
      setUser((prevUser) => ({ ...prevUser, learning: [...prevUser.learning, program] }));
    };

    useEffect(() => {
      // Check if authentication state is stored in localStorage
      const storedAuth = localStorage.getItem('isAuth');
      const storedUser = localStorage.getItem('user');
  
      if (storedAuth && storedUser) {
        setIsAuth(JSON.parse(storedAuth));
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
    useEffect(() => {
      // Update localStorage when authentication state changes
      localStorage.setItem('isAuth', isAuth);
      localStorage.setItem('user', JSON.stringify(user));
    }, [isAuth, user]);


  return (
    <AuthContext.Provider value={{isAuth, user,addLearning, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider