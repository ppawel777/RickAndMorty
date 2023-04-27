import React from 'react';
import { Button, Flex } from '@mantine/core';
import { useAuth } from '../../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';
  
  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    // const email = formData.get('email') || null;
    auth.signin(username, () => {
      navigate(from, {
        replace: true,
      })
    })
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <Flex
          rowGap="lg"
          justify="flex-start"
          align="flex-start"
          direction="column"
        >
          <label>Пользователь<span style={{ color: 'red' }}>*</span>:</label>
          <input type="text" name="username" required />

          <label>Email:</label>
          <input type="email" name="email" />

          <Button color="violet" radius="md" uppercase type='submit'>
            Войти
          </Button>
        </Flex>
      </form>
    </>
  )
}

export default Login
