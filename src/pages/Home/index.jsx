import React from 'react';
import CreatePost from '../../components/CreatePost';
import PostList from '../../components/PostList';

const Home = () => {
  return (
    <div>
      <CreatePost />
      <PostList />
    </div>
  );
};

export default Home;
