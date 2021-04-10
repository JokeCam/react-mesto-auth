import './InfoToolTip.css'
import logoSucces from '../images/Union.svg'

function InfoToolTip(props) {
    let opened = ''
    if(props.isLogOutPopupOpen){
        opened = 'info_opened'
    }

    return (
        <div className={`info ${opened}`}>
            <div className="info__container">
                <img className="info__logo" src={logoSucces} alt="Иконка 'успешная регистрация' или 'неудачная регистрация'"></img>
                <p className="info__text">Вы успешно зарегистрировались!</p>
                <button className="info__close" type="button" onClick={props.closeAllPopups}></button>
            </div>
        </div>
    )
}

export default InfoToolTip