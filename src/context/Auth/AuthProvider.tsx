import { useEffect, useState } from "react"
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: {children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null);

    const api = useApi();

    // Validação do token
    const validateToken = async () => {
        const storageData = localStorage.getItem('authtoken');
            if (storageData) {
                const data = await api.validateToken(storageData);

                if (data.user) {
                    setUser(data.user);
                }

            }
    }

    useEffect(() => {
        validateToken();
    }, [])

    //

    const signin = async(email: string, password: string) => {
        const data = await api.signin(email, password);

        if (data.user && data.token) {
            setUser(data.user);
            // aqui salva o token
            setToken(data.token);
            return true;
        }

        return false;
    }

    const logout = async() => {
        setUser(null);
        // Desmonta o Token
        setToken('');
        await api.logout();
    }

     // salvando no lovalStorage
    const setToken = (token: string) => {
        localStorage.setItem('authtoken', token);
    } 

    return (
        <AuthContext.Provider value={{ user, signin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}