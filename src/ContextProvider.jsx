import React from 'react';
import { createContext } from 'react';
const AuthContext = createContext(null)
const ContextProvider = () => {
    return (
        <AuthContext.Provider>

        </AuthContext.Provider>
    );
};

export default ContextProvider;