import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';

import Login from './Login.js';
import Register from './Register.js';
import InfoToolTip from './InfoToolTip.js';
import SignOut from './SignOut.js';
import ProtectedRoute from './ProtectedRoute.js';
import{ authTokenCheck } from '../utils/auth.js'

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  console.log(localStorage.getItem('JWT'))
  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false)

  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isLogOutPopupOpen, setIsLogOutPopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({})

  const [userEmail, setUserEmail] = useState('')

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
      api.addLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      }).catch(err => console.log(`Что-то пошло не так: ${err}`));
    } else {
      api.removeLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      }).catch(err => console.log(`Что-то пошло не так: ${err}`));
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(setCards(cards.filter(item => item._id !== card._id)))
      .catch(err => console.log(`Что-то пошло не так: ${err}`));
  }

  function handleAddPlaceSubmit(data) {
    api.addNewCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups()
      })
      .catch(err => console.log(`Что-то пошло не так: ${err}`));
  }

  function tokenCheck() {
    if (localStorage.getItem('JWT')){
      const token = localStorage.getItem('JWT');
      authTokenCheck(token)
      .then((res) => {
        if(res) {
          setUserEmail(res.data.email)
          setLoggedIn(true);
          history.push('/content')
        }
      })
    }
  }

  useEffect(() => {
    api.getCards()
      .then(res => setCards(res))
      .catch(err => console.log(`Что-то пошло не так: ${err}`))
  }, [])

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`Что-то пошло не так: ${err}`))
  }, [])

  useEffect(() => {
    tokenCheck()
  }, [])

  const handleUpdateUser = (data) => {
    api.updateUserInfo(data)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Что-то пошло не так: ${err}`));
  }

  const handleUpdateAvatar = (data) => {
    api.updateUserAvatar(data)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups();
      })
      .catch(err => console.log(`Что-то пошло не так: ${err}`))
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleCardClick = (url) => {
    setSelectedCard(url)
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsLogOutPopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="content">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path="/content">
            <SignOut userEmail={userEmail} isLogOutPopupOpen={isLogOutPopupOpen} />
            <Header userEmail={userEmail} setIsLogOutPopupOpen={setIsLogOutPopupOpen} isLogOutPopupOpen={isLogOutPopupOpen}/>
            <ProtectedRoute exact path="/"
              component={Main}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
              cards={cards}
              loggedIn={loggedIn}
            />
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
            <PopupWithForm title={'Вы уверены?'} name={'confirm'} children={
              <>
              </>
            } />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </Route>
          <Route path="/sign-in">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/sign-up">
            <Register setLoggedIn={setLoggedIn} setIsLogOutPopupOpen={setIsLogOutPopupOpen}/>
            <InfoToolTip isLogOutPopupOpen={isLogOutPopupOpen} closeAllPopups={closeAllPopups}/>
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/content" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
