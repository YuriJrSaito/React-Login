import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/login/index";

export const RequiredAuth = ({ children }: {children: JSX.Element}) =>{
    const auth = useContext(AuthContext);
    
    if(!auth.user)
    {
        return <Login />
    }

    return children;
}