import React from 'react';
import {Route} from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout';
const PublicRoute = ({component: Component,path, ...rest}) =>{
    return (
        <Route
            {...rest}
            render = {
                props =><BasicLayout><Component {...props} /></BasicLayout>
            }
        />
    )
};

export default PublicRoute;