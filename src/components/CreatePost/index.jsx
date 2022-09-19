import { Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Post from '../../redux/posts';
import './index.scss';

const CreatePost = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleSubmit = () => {
    dispatch(Post.thunks.createPost({ text })).then((res) => {
      if (res.payload.data.statusCode === 200) {
        dispatch(Post.thunks.fetchAll({ page: 1 }));
        setText('');
      }
    });
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className='create-post-container'>
      <TextArea
        placeholder='What is on your mind today...'
        value={text}
        onChange={handleChange}
      />
      <div className='post-button'>
        <Button onClick={handleSubmit}>Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
