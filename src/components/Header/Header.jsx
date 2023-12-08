import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { useResize } from "../../hooks/useResize";
import './Header.css';


const Header = ({ onMenuOpen }) => {
  const { isDesktop } = useResize();

  return (
    <header className="header">
      <Logo className="header__logo"/>
      {isDesktop ? (
        <Navigation isLogged={false}/>
      ) : (
        <button
          className="header__burger-menu header__link"
          onClick={onMenuOpen}
        />
      )}

    </header>
  );
};

export default Header;