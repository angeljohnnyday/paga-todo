import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Banks from '../views/Banks'
import Bank from '../views/Bank'

const NotFound = () => (
    <h1>404 - Not Found!</h1>
)

const RouteWithSubRoutes = route => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} { ...route.props } routes={route.routes} />
            )}
        />
    )
}

export const RouterParent = ({ routes }) => (
    <Switch>
        {routes.map((route, index) => (
            <RouteWithSubRoutes
                key={index}
                {...route}
            />
        ))}
        <Route component={NotFound} />
    </Switch>
)

const routes = [{
    path: '/',
    component: () => <Redirect to="/banks" />,
    exact: true
}, {
    path: '/banks',
    component: Banks
}, {
    path: '/bank/:id',
    component: Bank
}];
  
export default routes;