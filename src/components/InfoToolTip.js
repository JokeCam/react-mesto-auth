import './InfoToolTip.css'
import logoSucces from '../images/Union.svg'
import logoFail from '../images/Union-fail.svg'
import { useHistory } from 'react-router-dom'

function InfoToolTip(props) {
    let opened = ''
    if (props.isLogOutPopupOpen) {
        opened = 'info_opened'
    }

    let history = useHistory();

    function handleCloseClick() {
        props.closeAllPopups();
        history.push('/sign-in')
    }

    console.log(props.popupError)

    return (
        <div className={`info ${opened}`}>
            <div className="info__container">
                <img className="info__logo" src={props.popupError ? logoFail : logoSucces} alt="Иконка 'успешная регистрация' или 'неудачная регистрация'"></img>
                <p className="info__text">{props.popupError ? 'Что-то пошло не так! Попробуйте еще раз.' : 'Вы успешно зарегистрировались'}</p>
                <button className="info__close" type="button" onClick={handleCloseClick}></button>
            </div>
        </div>
    )
}

export default InfoToolTip