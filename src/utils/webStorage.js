import Cookies from 'js-cookie'

// ******************************************** sessionStorage 操作 *************************************************//
export function getSessionStorageItem(key) {
  const _a = window.sessionStorage.getItem(key)
  const _b = JSON.parse(_a)
  return _b || null
}
export function setSessionStorageItem(key, info) {
  window.localStorage.setItem(key, JSON.stringify(info))
}

// ******************************************** localStorage 操作 *************************************************//
export function setLocalStorageItem(key, info) {
  window.localStorage.setItem(key, JSON.stringify(info))
}

// 取localStorage
export function getLocalStorageItem(key) {
  const _a = window.localStorage.getItem(key)
  const _b = JSON.parse(_a)
  return _b || null
}

// ******************************************** Cookies 操作 *************************************************//
// cookie 过期时间（单位：天）；也可以传入new Date(xxx) 作为过期时间，到期会自动删除，如下一行为30s之后过期
// const CookieExpires = new Date(new Date().getTime() + 30000);
const CookieExpires = 1
export function getCookie(key) {
  const _a = Cookies.get(key)
  return _a || null
}

export function setCookie(key, val, expires = CookieExpires) {
  const _a = Cookies.set(key, val, { expires: expires })
  return _a || null
}

const TokenKey = 'JSC-Token' // cookie信息中的key

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, expires = CookieExpires) {
  return Cookies.set(TokenKey, token, { expires: expires })
}

export function clearToken() {
  return Cookies.remove(TokenKey)
}
