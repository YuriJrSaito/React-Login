import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from '../../types/User'
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({children}:{children: JSX.Element}) =>{
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(()=>{
        const validateToken = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData)
            {
                const data = await api.validateToken(storageData);
                if(data.user)
                {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email: string, password: string) =>{
        const data = await api.signin(email, password);
        if(data.user && data.token)
        {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signup = async (name:string, email:string, password:string) =>{
        const data = await api.signup(name, email, password);
        if(data)
             return true;
        return false;
    }

    const signout = async () =>{
        await api.logout();
        setUser(null);
        setToken('');
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signup, signout}}>
            {children}
        </AuthContext.Provider>
    )
}