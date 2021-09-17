import { wsUrl } from './url'
import webSocket from './ws'
import Cookies from 'js-cookie'

export default class ReqWs {
  constructor(props) {
    const { url, name, msgCb } = props
    this.WS = new webSocket(wsUrl + url, msgCb, name)
  }

  connect(initData, cb) {
    this.WS.connect({ ...initData, token: Cookies.get('login_token') }, cb)
  }

  send(data) {
    this.WS.sendHandle({ ...data, token: Cookies.get('login_token') })
  }

  close() {
    this.WS.closeMyself()
  }
}
