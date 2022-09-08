import React from "react";
import Header from "./Header.js";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}  
        </>
    );
}

export default Layout;