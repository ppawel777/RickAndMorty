import React from 'react';
import { Container } from '@mantine/core';
import Routes from './routes/Routes.js'
import { AuthProvider } from './context/AuthProvider.js';

const App = () => {
  return (
    <AuthProvider>
      <Container>
        <Routes />
      </Container>
    </AuthProvider>
  );
}

export default App
