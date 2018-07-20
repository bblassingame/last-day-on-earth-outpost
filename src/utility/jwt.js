const getHeader = (jwt) => {
  const jwtComponents = jwt.split('.')
  const headerBase64 = jwtComponents[0]
  const header = JSON.parse(atob(headerBase64))
  return header
}

const getPayload = (jwt) => {
  const jwtComponents = jwt.split('.')
  const payloadBase64 = jwtComponents[1]
  const payload = JSON.parse(atob(payloadBase64))
  return payload
}

const getAllProperties = (jwt) => {
  const jwtComponents = jwt.split('.')
  const headerBase64 = jwtComponents[0]
  const payloadBase64 = jwtComponents[1]
  const header = JSON.parse(atob(headerBase64))
  const payload = JSON.parse(atob(payloadBase64))
  const ret = {...header, ...payload}
  return ret
}

export {
  getHeader,
  getPayload,
  getAllProperties
}