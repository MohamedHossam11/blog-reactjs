import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import User from '../../redux/user';
import './index.scss';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState('');
  const onFinish = (values) => {
    dispatch(User.thunks.login(values)).then((res) => {
      if (res.payload.data.statusCode === 452) {
        setError('Wrong Credentials');
      } else {
        history.push('/home');
      }
    });
  };

  return (
    <div className='login-container'>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
        onValuesChange={() => setError('')}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
          help={error}
          validateStatus={error ? 'error' : ''}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
          help={error}
          validateStatus={error ? 'error' : ''}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
