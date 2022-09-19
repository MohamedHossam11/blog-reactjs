import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider } from 'antd';

import store from './redux/store';
import { history } from './router';
import Router from './router';
import './index.scss';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider >
        <Router />
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

export default Root;
