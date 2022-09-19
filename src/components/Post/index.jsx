import { Card } from 'antd';
import React from 'react';
import moment from 'moment';
import './index.scss';

const Post = ({ post }) => {
  const { text, createdAt, accounts } = post;
  return (
    <div className='card-container'>
      <Card>
        <div className='title'>
          {`${accounts?.first_name || ''} ${accounts?.last_name || ''}`}
        </div>
        <div>{text}</div>
        <div className='created-at'>{moment(createdAt).calendar()}</div>
      </Card>
    </div>
  );
};

export default Post;
