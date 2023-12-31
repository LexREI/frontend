import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '@/config/domain';
import { getCurrentUserUsingGet } from '@/services/UserController';

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  userInfo: API.User;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: (provider: string) => void;
  signout: () => void;
  getCurrentUser: () => void;
};

const AuthContext = createContext<AuthContextType>({
  userInfo: {},
  isAuthenticated: true,
  setIsAuthenticated: () => {},
  login: () => {},
  signout: () => {},
  getCurrentUser: () => {},
});

function AuthProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<API.User>({});
  const [loading, setLoading] = useState<boolean>(true);

  const login = (provider: string) => {
    window.location.href = `${BASE_URL}/user/login/${provider}`;
  };

  const signout = () => {
    window.location.href = `${BASE_URL}/user/logout`;
  };

  const getCurrentUser = async () => {
    try {
      const res = await getCurrentUserUsingGet();
      if (res.data.code === 200) {
        setIsAuthenticated(true);
        setUserInfo(res.data.data);
      }
    } catch (e) {
      setIsAuthenticated(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        isAuthenticated,
        setIsAuthenticated,
        login,
        signout,
        getCurrentUser,
      }}
    >
      {loading ? <div> </div> : children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
