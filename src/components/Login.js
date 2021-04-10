import './Login.css'
import logo from '../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../utils/auth.js'

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        login(email, password)
        .then((res)=> {
            if(res){
                console.log(res)
                localStorage.setItem('JWT', res.token)
                props.setLoggedIn(true)
                history.push('/content')
            }
        })
    }


    return (
        <>
            <header className="header">
                <img className="header__logo" src={logo} alt="Лого сайта: Место" />
                <Link className="header__link" to="/sign-up">Регистрация</Link>
            </header>
            <form onSubmit={handleSubmit} className="login login__form">
                <h1 className="login__title">Вход</h1>
                <input value={email} onChange={handleEmailChange} className="login__input" type="email" placeholder="Email" required></input>
                <input value={password} onChange={handlePasswordChange} className="login__input" type="password" placeholder="Пароль" required></input>
                <button className="login__button" type="submit">Войти</button>
            </form>
        </>
    )
}

export default Login