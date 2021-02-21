import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./Auth";
import UserLayout from "./layouts/UserLayout";
import GuestLayout from "./layouts/GuestLayout";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  return (
    <div className="content">
      <Suspense fallback={null}>
        <Auth
          unauthenticatedComponent={<GuestLayout />}
          loadingComponent={<CircularProgress disableShrink />}
        >
          <Switch>
            <Route path="/user" component={UserLayout} />
            <Redirect from="/" to="/user/" />
          </Switch>
        </Auth>
      </Suspense>
    </div>
  );
}

export default App;
