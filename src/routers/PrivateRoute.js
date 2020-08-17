import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
        component={
            (props) => (
                (isAuthenticated) 
                ? (<Component {...props} />)
                : (<Redirect to="/login" />)
            )
        } />
    )
}

export default PrivateRoute
