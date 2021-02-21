import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setSession, getAccessToken, signIn, getMe } from "./store/actions/jwt";

const Auth = ({ children, unauthenticatedComponent, loadingComponent }) => {
  const [componentDidMount, setComponentDidMount] = useState(false);
  const jwt = useSelector((state) => state.jwt);
  const dispatch = useDispatch();

  const init = () => {
    setInterceptors();
    handleAuthentication();
  };

  const setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (
            err.response &&
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized response, logout the user
            setSession(null);
          }
          throw err;
        });
      }
    );
  };

  const handleAuthentication = () => {
    if (!isAuthTokenValid()) {
      setSession(null);
    } else {
      setSession(getAccessToken());
    }
  };

  const isAuthTokenValid = () => {
    if (!getAccessToken()) {
      return false;
    }
    return true;
  };

  const autoLogin = async () => {
    if (!isAuthTokenValid()) {
      await dispatch(
        signIn({ email: "zarehmelkonian@gmail.com", password: "12345678" })
      );
    }
    dispatch(getMe());
  };

  const logout = () => {
    setSession(null);
  };

  useEffect(() => {
    // Similar to componentDidMount
    if (componentDidMount !== true) {
      setComponentDidMount(true);
      init();
      autoLogin();
      //logout();
    }

    // Similar to componentDidUpdate:
  });

  if ((jwt.error && jwt.loading === false) || !isAuthTokenValid())
    return <>{unauthenticatedComponent}</>;
  if (jwt.loading) return <>{loadingComponent}</>;

  return <> {children}</>;
};

export default Auth;
