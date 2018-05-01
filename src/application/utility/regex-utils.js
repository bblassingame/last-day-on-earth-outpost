export const quoteRegExp = (str) => {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
}

export const getURLString = (str) => {
  return str.replace(/[ &]/g, '_')
}