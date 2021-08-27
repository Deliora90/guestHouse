import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "../../router/routes";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      {publicRoutes.map((route) =>
        <Route component={route.Component} path={route.path} key={route.path} exact={route.exact}/>)
      }
      <Redirect to="/"/>
    </Switch>
  )
}

export default AppRouter
