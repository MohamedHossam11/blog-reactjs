import { useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Guest from './Guest';

export const history = createBrowserHistory();

const Router = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <Route
      render={() => (
        <BrowserRouter>
          <Route component={Guest} />
        </BrowserRouter>
      )}
    />
  );
};

export default Router;
