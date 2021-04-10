import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './Header.css';

function Header(props) {

  function handleClick(){
    localStorage.removeItem('JWT');
  }

  function handleButtonClick(){
    if (!props.isLogOutPopupOpen){
      props.setIsLogOutPopupOpen(true)
    } else {
      props.setIsLogOutPopupOpen(false)
    }
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого сайта: Место" />
      <div className="header__container">
        <p className="header__email">{props.userEmail}</p>
        <Link onClick={handleClick} className="header__signout" to="/sign-in">Выйти</Link>
      </div>
      <button onClick={handleButtonClick} className={`header__button ${!props.isLogOutPopupOpen ? '' : 'header__button_active'}`} type="button"></button>
    </header>
  )
}

export default Header;