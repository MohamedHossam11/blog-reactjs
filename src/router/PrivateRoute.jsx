import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadFromLocalStorage } from '../utils/localStorageHelpers';
import { isEmpty } from 'lodash';

const PrivateRoute = ({ component: Component, path }) => {
  const user = loadFromLocalStorage('user');
  const isSignedIn = !isEmpty(user);
  return (
    <Route
      render={(props) =>
        isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
      path={path}
      exact
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object,
};

export default PrivateRoute;
