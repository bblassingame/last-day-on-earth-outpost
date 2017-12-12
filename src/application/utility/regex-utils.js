export const quoteRegExp = (str) => {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
}