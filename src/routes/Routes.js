import { Route, Routes } from "react-router-dom";

import NotFound from '../pages/NotFound'
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import HeroesList from '../pages/HeroesList'
import Heroes from '../pages/Heroes'
import LocationList from '../pages/LocationList'
import Location from '../pages/Location'
import EpisodeList from '../pages/EpisodeList'
import Episode from '../pages/Episode'
import Login from '../pages/Login'
import { PrivateRoute } from "./PrivateRoute";

const RoutesComponent = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<PrivateRoute><HeroesList /></PrivateRoute>} />
        <Route path="heroes/:id" element={<PrivateRoute><Heroes /></PrivateRoute>} />
        <Route path="locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
        <Route path="locations/:id" element={<PrivateRoute><Location /></PrivateRoute>} />
        <Route path="episodes" element={<PrivateRoute><EpisodeList /></PrivateRoute>} />
        <Route path="episodes/:id" element={<PrivateRoute><Episode /></PrivateRoute>} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;
