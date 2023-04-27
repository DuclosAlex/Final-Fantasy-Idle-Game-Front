import { createContext, useState} from 'react';

export const userContext = createContext();

export const UserProvider = ({ children}) => {

    const [user, setUser ] = useState();

    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <userContext.Provider value= {{user, updateUser}}>
            {children}
        </userContext.Provider>
    );
};