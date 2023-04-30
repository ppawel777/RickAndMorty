import { Container } from '@mantine/core';
import Routes from './routes/Routes.jsx'
import { AuthProvider } from './context/AuthProvider.jsx';

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
