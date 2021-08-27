import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "../../pages/home/home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

if (process.env.NODE_ENV !== "production") AppRouter.displayName = "AppRouter";