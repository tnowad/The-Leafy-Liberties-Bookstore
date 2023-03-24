export const setCookie = (name, value, days) => {
  let expires = ''
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

export const getCookie = (name) => {
  const cookieString = decodeURIComponent(document.cookie)
  const cookies = cookieString.split(';')
  const cookieObject = {}
  cookies.forEach((cookie) => {
    const [cookieName, cookieValue] = cookie.split('=')
    cookieObject[cookieName.trim()] = cookieValue.trim()
  })
  return cookieObject[name]
}

export const updateCookie = (name, value, days) => {
  let expires = ''
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

export const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
