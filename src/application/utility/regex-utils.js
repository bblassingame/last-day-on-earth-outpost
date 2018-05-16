export const quoteRegExp = (str) => {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
}

export const getURLString = (str) => {
  return str.replace(/[ &]/g, '_')
}

export const parseAttributes = (str) => {
  // get rid of any beginning and end white space
  str = str.trim()

  let attributes = []
  let inQuotes = false
  let lastIndex = 0
  
  // iterate through the attributes and look for the spaces between them, skipping spaces in double qoutes (")
  for(let i = 0 ; i < str.length ; i++) {
    // keep track of whether we are inside a pair of double quotes
    if('"' === str[i])
      inQuotes = !inQuotes

    // once we find a space and we're not in double quotes, grab it as an attribute
    if(' ' === str[i] && false === inQuotes) {
      let temp = str.substring(lastIndex, i)
      attributes.push(temp)
      lastIndex = i + 1
    }
  }

  // grab the last attribute since we won't find a space to indicate the end of an attribute
  let temp = str.substring(lastIndex)
  attributes.push(temp)

  return attributes
}