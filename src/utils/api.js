class Api {
    constructor(option){

    this._url = option.baseUrl
    this._headers = option.headers
    }

    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    getCards(){
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    updateUserInfo(data){
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
              })
        })
        .then(this._checkResponse)
    }

    addNewCard(data){
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
              })
        })
        .then(this._checkResponse)
    }

    deleteCard(id){
        return fetch(`${this._url}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    addLike(id){
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: "PUT",
            headers: this._headers
        })  
        .then(this._checkResponse)
    }

    removeLike(id){
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: "DELETE",
            headers: this._headers
        })  
        .then(this._checkResponse)
    }

    updateUserAvatar(url){
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: url,
              })
        })
        .then(this._checkResponse)
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
  headers: {
    authorization: '75314450-8bde-49f1-8e95-7ac1e831360d',
    'Content-Type': 'application/json'
  }
});

export default api
