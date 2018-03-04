import PageElement from './page-element'

class ListItemElement extends PageElement
{
  constructor() {
    super()
    this.rawTokens = []
    this.attributes = {}
    this.displayText = ''
  }

  getType() {
    return 'ListItemElement'
  }

  setTokens(tokens) {
    this.rawTokens = tokens
  }

  // we need to do a couple of things here.
  // first we create the text and attributes for this paragraph element
  // second, we check if we need to create additional child elements and take care of that
  initialize() {
    if(this.rawTokens.length === 0 || this.rawTokens.length === 2) {
      // log an error if there are no tokens or two tokens found during initialization.  We should have
      // 1, 3, or more than 3 tokens.
      console.log('ERROR: no tokens or wrong number of tokens found in intializaion')
      return
    }
    else if(this.rawTokens.length === 1) {
      // text is the first and only token
      this.displayText = this.rawTokens[0] 
    }
    else if(this.rawTokens[0].charAt(0) === '<') {
      // extract any attributes that we have with the tag
      let strippedTag = this.rawTokens[0].slice(1, -1)
      let attrTokens = strippedTag.split(' ')

      // set the tag so that we know what to convert to
      this.attributes['tag'] = attrTokens[0]

      // begin iterating after the first token since that's the actual tag
      for(let i = 1 ; i < attrTokens.length ; i++) {
        let attrAndValue = attrTokens[i].split('=') // split the attribute and its value EX:  src="http://www.google.com"
        const attr = attrAndValue[0] // the attribute is before the equals  Ex: attr = src
        const value = attrAndValue[1].slice(1, -1) // the value is after the equals and we slice off the quotes  Ex: value = http://www.google.com
        this.attributes[attr] = value
      }

      // either set the text if we're just a tag element or create child elements if we're complex
      if(this.rawTokens.length === 3) {
        // text is at the second token when we have 3 tags
        this.displayText = this.rawTokens[1]
      }
    }
  }
}

export default ListItemElement