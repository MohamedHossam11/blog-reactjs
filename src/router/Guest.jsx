import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';

import HomePage from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';

const Guest = () => {
  return (
    <DefaultLayout>
      <Switch>
        <PrivateRoute path='/home' exact component={HomePage} />
        <Route path='/login' exact component={Login} />
        <Route path='/signUp' exact component={SignUp} />
        <Route component={NotFound} exact />
      </Switch>
    </DefaultLayout>
  );
};

export default Guest;
