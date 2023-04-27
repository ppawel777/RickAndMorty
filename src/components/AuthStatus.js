import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider"
import { Button } from '@mantine/core';

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  const handleSignOut = () => auth.signout(() => {
    navigate('/');
  });

  if (auth.user === null) return null;

  return (
    <>
      <span>{ auth.user }</span>
      <Button color="violet" radius="md" uppercase onClick={ handleSignOut }>
        Выйти
      </Button>
    </>
  )
}