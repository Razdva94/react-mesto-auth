class Api {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.baseUrl;
  }

  getInitialCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  getInitialProfile() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  deleteCardFromServer(cardId) {
    return this._request(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  postCardToServer(name, link) {
    return this._request(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  changeProfileInfo(getInfo) {
    return this._request(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: getInfo.name,
        about: getInfo.about,
      }),
    });
  }

  changeAvatarImage(avatarUrl) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    });
  }

  changeLikeCardStatus(cardId, value) {
    if (value) {
      return this._request(`${this._url}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      });
    }
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then((res) => this._checkResponse(res));
  }
}
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "0d8f1e17-52e4-4e28-9682-deb39acca963",
    "Content-Type": "application/json",
  },
});

export default api;
