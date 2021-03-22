import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';

function PrivateRoute({ ...params }) {
    const location = useLocation();
    console.log(location, 'private route')
    const token = sessionStorage.getItem("authorization-token");
    if (!token)
        alert(`You must login first to access ${location.pathname.split('/')[1]} page`);
    return (
        token ? (<Route {...params} />) : (<Redirect to={{ pathname: '/', state: { lastURL: location.pathname } }}/>)
    );
}

export default PrivateRoute;