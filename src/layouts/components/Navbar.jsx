import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="rm-heroes_nav">
      <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/">Главная</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/heroes">Персонажи</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/locations">Локации</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/episodes">Эпизоды</NavLink>
    </nav>
  )
}

export default NavBar;
