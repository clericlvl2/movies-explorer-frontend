import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { useResize } from "../../hooks/useResize";
import "./Header.css";

const Header = ({ onNavMenuOpen, isLogged }) => {
  const { isDesktop } = useResize();

  return (
    <header className="header">
        <Logo className="header__logo" />
      {!isDesktop && isLogged ? (
        <button
          type="button"
          className="header__burger-menu header__link"
          onClick={onNavMenuOpen}
        />
      ) : (
        <Navigation isLogged={isLogged} showMainLink={false} />
      )}

    </header>
  );
};

export default Header;