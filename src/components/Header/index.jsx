import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Menu } from 'antd';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { loadFromLocalStorage } from '../../utils/localStorageHelpers';
import { isEmpty } from 'lodash';

const Navbar = () => {
  const history = useHistory();
  const user = loadFromLocalStorage('user');
  const isSignedIn = !isEmpty(user);
  const handleLogout = () => {
    history.push('/login');
    localStorage.setItem('user', undefined);
  };
  const items = isSignedIn
    ? [{ key: 1, label: 'Logout', onClick: () => handleLogout() }]
    : [{ key: 1, label: '' }];

  return (
    <div className='header-container'>
      <Header>
        <img
          src='https://l1r1.ai/wp-content/uploads/2022/06/l1r1_Logo_2022_dark_bg.png'
          className='logo'
        />
        <Menu theme='dark' mode='vertical' items={items} />
      </Header>
    </div>
  );
};

export default Navbar;
