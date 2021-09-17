// 查询条件存在特殊字符==>16进制转换
export const strToHexCharCode = str => {
  if (str === '') return ''
  const hexCharCode = []
  const reg = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
  )
  if (reg.test(str)) {
    for (let i = 0; i < str.length; i++) {
      if (reg.test(str[i])) {
        hexCharCode.push('%')
        hexCharCode.push(str.charCodeAt(i).toString(16))
      } else {
        hexCharCode.push(str[i])
      }
    }
  } else {
    hexCharCode.push(str)
  }
  return hexCharCode.join('')
}
