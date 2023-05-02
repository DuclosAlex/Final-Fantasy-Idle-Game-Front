import React, { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

interface User {
    id: number;
    nickname: string;
    role: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

interface UserContextType {
    user: User;
    addUser: (user: User) => void;
}

interface UserContextProviderProps {
    children : ReactNode;
}

export const userContext = createContext<UserContextType>({
    user: {
        id: 0,
        nickname: '',
        role: '',
        email: '',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    addUser: () => {},
});

export const UserProvider = ({ children }: UserContextProviderProps) => {
    const [ user, setUser] = useState<User>({
        id: 0,
        nickname: '',
        role: '',
        email: '',
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    const addUser = (user: User) => {
        setUser(user)
    }

    useEffect(() => {
        console.log(user)
    }, [user])
    
    return <userContext.Provider value={{user, addUser}}>
        {children}
        </userContext.Provider>
};

