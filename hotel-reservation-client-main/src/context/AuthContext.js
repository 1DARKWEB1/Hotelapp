import {createContext, useEffect, useState} from "react";
import server from "../index";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext(true);

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);

    let loginUser = (e) => {
        e.preventDefault();

        axios
            .post(`${server}api/token/`, {
                username: e.target.username.value,
                password: e.target.password.value,
            })
            .then(res => {
                setAuthTokens(res.data)
                setUser(jwtDecode(res.data.access));
                localStorage.setItem('authTokens', JSON.stringify(res.data));
            })
            .catch(err => {
                alert("Something went wrong");
            })
    }

    let registerUser = (e) => {
        e.preventDefault();

        axios
            .post(`${server}apps/user/client/create/`, {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                phone: e.target.phone.value,
            })
            .then(res => {
                setAuthTokens(res.data)
                setUser(jwtDecode(res.data.access));
                localStorage.setItem('authTokens', JSON.stringify(res.data));
            })
            .catch(err => {
                alert("Something went wrong");
            })
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let updateToken = () => {
        console.log("Token Updated");
        axios
            .post(`${server}api/token/refresh/`, {
                refresh: authTokens.refresh
            })
            .then(res => {
                setAuthTokens(res.data)
                setUser(jwtDecode(res.data.access))
                localStorage.setItem('authTokens', JSON.stringify(res.data))
                // history.push('/');
            })
            .catch(err => {
                logoutUser();
            })
    }

    let contextData = {
        user: user,
        registerUser: registerUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if(authTokens){
                updateToken()
            }
        }, 240000);

        return () => clearInterval(interval);

    }, [authTokens, updateToken])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}