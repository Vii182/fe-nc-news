import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

// <<<<< USER CONTEXT >>>>> ------

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    // <<<<< CHECK IF LOGGED IN >>>>> ------
    useEffect(() => {
        const userInStorage = JSON.parse(localStorage.getItem("user"));
        if (userInStorage) setUser(userInStorage);
    }, []);

    // <<<<< SAVE TO LOCAL WHEN CHANGE >>>>> ------
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const login = (username) => setUser({ username });
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};