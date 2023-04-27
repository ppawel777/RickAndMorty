import React from 'react';
import { Container } from '@mantine/core';
import Routes from './routes/Routes.js'
import { AuthProvider } from './context/AuthProvider.js';
// import DemoToggle from './components/Demo/DemoToggle'
// import FormComponent from './components/Form/FormComponent';

const App = () => {
  return (
    // <DemoToggle />
    // <FormComponent />
    <AuthProvider>
      <Container>
        <Routes />
      </Container>
    </AuthProvider>
  );
}

export default App
