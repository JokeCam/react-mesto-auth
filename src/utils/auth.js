export const register = (email, password) => {
  const BASE_URL = 'https://auth.nomoreparties.co'

  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const login = (email, password) => {
  const BASE_URL = 'https://auth.nomoreparties.co'

  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const authTokenCheck = (token) => {
  const BASE_URL = 'https://auth.nomoreparties.co'

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })
    .then((res) => {
      console.log(res)
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}