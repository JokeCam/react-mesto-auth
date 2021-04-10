import './Register.css'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../utils/auth.js'



function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [popupError, setPopupError] = useState(false);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        register(email, password)
            .then((res) => {
                if (res) {
                    console.log(res)
                    props.setLoggedIn(true)
                    props.setIsLogOutPopupOpen(true)
                }
            })
            .catch((err) => {
                if (err) {
                    console.log(err)
                    setPopupError(true)
                    props.handlePopupError(popupError)
                }
                else {
                    setPopupError(false)
                    props.handlePopupError(popupError)
                }
            })
    }

    return (
        <>
            <header className="header">
                <img className="header__logo" src={logo} alt="Лого сайта: Место" />
                <Link className="header__link" to="/sign-in">Войти</Link>
            </header>
            <form onSubmit={handleSubmit} className="register register__form">
                <h1 className="register__title">Зарегистрироваться</h1>
                <input onChange={handleEmailChange} value={email} className="register__input" type="email" placeholder="Email" required></input>
                <input onChange={handlePasswordChange} value={password} className="register__input" type="password" placeholder="Пароль" required></input>
                <button className="register__button" type="submit">Зарегистрироваться</button>
                <Link className="register__text" to="/sign-in">Уже зарегистрированы? Войти</Link>
            </form>
        </>
    )
}

export default Register