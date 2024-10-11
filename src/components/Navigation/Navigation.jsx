import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.css} to="/">
        Home
      </NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </nav>
  );
};

export default Navigation;
