import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar";
import LoginIn from "./components/LoginIn";
import { AuthStatus } from "../components/RickAndMorty/AuthStatus";
import { Flex } from '@mantine/core';

import './index.scss';

const MainLayout = () => {
  return (
    <>
      <div className="rm-heroes_header">
        <NavBar />
        <Flex
          mih={50}
          gap="xs"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <LoginIn/>
          <AuthStatus />
        </Flex>
      </div>
      <Outlet />
    </>
  )
}

export default MainLayout;
