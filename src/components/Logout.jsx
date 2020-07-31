import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import UserProvider from '../contexts/UserProvider';


function Logout() {
    
    const [userData, setUser] = useContext(UserProvider.context);

    useEffect(() => {
        axios({
            method: 'GET',
            data: {},
            withCredentials: true,
            url: 'http://localhost:9000/auth/logout'
        }).then(res => {
            console.log(res);
            setUser(null);
        });
    });

    return (
        <Redirect to="/" />
    )
}

export default Logout;