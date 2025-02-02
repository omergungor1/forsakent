"use client";
import { createContext, useContext, useState } from "react";


const NavigationContext = createContext();

export function NavigationProvider({ children }) {

    const [navigationUrl, setNavigationUrl] = useState("/");

    return (
        <NavigationContext.Provider value={{ navigationUrl, setNavigationUrl }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useLanguage() {
    return useContext(NavigationContext);
}