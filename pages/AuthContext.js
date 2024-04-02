// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext({
//   isLoggedIn: false,
//   login: () => {},
//   logout: () => {},
// });

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export default function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function login() {
//     setIsLoggedIn(true);
//   }

//   function logout() {
//     setIsLoggedIn(false);
//   }

//   const value = {
//     isLoggedIn,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
