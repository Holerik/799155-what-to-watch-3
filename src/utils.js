// utils.js

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const idKey = `cardId`;
export const pageKey = `pageId`;

export const setCookie = (key, value) => {
  document.cookie = `${key}=${value}; `;
};

export const getCookie = (key) => {
  const cookie = document.cookie;
  let start = cookie.indexOf(`${key}=`);
  if (start === -1) {
    return `-1`;
  }
  start = cookie.indexOf(`=`, start);
  const fin = cookie.indexOf(`;`, start);
  if (fin === -1) {
    return cookie.slice(start + 1);
  }
  return cookie.slice(start + 1, fin);
};
