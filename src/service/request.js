import { baseUrl as baseURL } from './url'
import Cookies from 'js-cookie'
import { strToHexCharCode } from '../utils/utils'
import { ElMessage } from 'element-plus'

/**
 * Get请求
 *
 * @param {*} url 请求URL
 * @param {*} params 请求参数
 */

export function get(url, params) {
  const token = Cookies.get('login_token')
  // 请求参数处理
  let param = params && { ...params }
  if (param) {
    let paramsArray = []
    Object.keys(param).forEach(key =>
      paramsArray.push(key + '=' + strToHexCharCode(param[key]))
    )
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return new Promise(function (resolve, reject) {
    fetch(`${baseURL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'zh-CN',
        token
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        const { code, msg } = responseJson
        if (code === 401) {
          ElMessage({
            message: msg,
            duration: 2000
          }) // 消息提示
          setTimeout(() => {
            window.location.href = '/login'
          }, 1000)
          return
        }
        resolve(responseJson)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * POST请求，请求参数以JSON形式发送
 *
 * @param {*} url 请求URL
 * @param {*} params 请求参数
 */
export function post(url, params) {
  const token = Cookies.get('login_token')
  const reqParams = JSON.stringify(params)
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'zh-CN',
        token
      },
      body: reqParams
    })
      .then(response => response.json())
      .then(responseJson => {
        const { code, msg } = responseJson
        if (code === 401) {
          ElMessage({
            message: msg,
            duration: 2000
          }) // 消息提示
          setTimeout(() => {
            window.location.href = '/login'
          }, 1000)
          return
        }
        if (code !== 0) {
          ElMessage({
            message: msg,
            duration: 2000
          }) // 消息提示
          // return;
        }
        resolve(responseJson)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

/**
 * PUT请求，请求参数以JSON形式发送
 *
 * @param {*} url 请求URL
 * @param {*} params 请求参数
 */
export function put(url, params) {
  const token = Cookies.get('login_token')
  const reqParams = JSON.stringify(params)
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'zh-CN',
        token
      },
      body: reqParams
    })
      .then(response => response.json())
      .then(responseJson => {
        const { code, msg } = responseJson
        if (code === 401) {
          ElMessage({
            message: msg,
            duration: 2000
          }) // 消息提示
          setTimeout(() => {
            window.location.href = '/login'
          }, 1000)
          return
        }
        if (code !== 0) {
          ElMessage({
            message: msg,
            duration: 2000
          }) // 消息提示
        }
        resolve(responseJson)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

/**
 * DELETE请求
 *
 * @param {*} url 请求URL
 * @param {*} params 请求参数
 */
export function isDelete(url, params) {
  const token = Cookies.get('login_token')
  // 请求参数处理
  let param = params && { ...params }
  if (param) {
    let paramsArray = []
    Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'zh-CN',
        token
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        const { code, msg } = responseJson
        if (code === 401) {
          ElMessage({
            message: msg,
            duration: 2000
          }) // 消息提示
          setTimeout(() => {
            window.location.href = '/login'
          }, 1000)
          return
        }
        resolve(responseJson)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
