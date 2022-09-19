import React from 'react';
import './index.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      Oops, seems like this is a broken page, go back to the
      <a href='/login' style={{ marginLeft: '5px', marginRight: '5px' }}>
        login
      </a>{' '}
      page
    </div>
  );
};

export default NotFound;
