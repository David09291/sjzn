export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8080' // 开发环境地址
    : 'http://127.0.0.1:8080' // 生产环境地址

export const wsUrl =
  process.env.NODE_ENV === 'development'
    ? 'ws://127.0.0.1:8080/webSocket/wscmd' // 开发环境地址
    : 'ws://127.0.0.1:8080/webSocket/wscmd' // 生产环境地址
