class ParagraphElement
{
  constructor() {
    this.rawTokens = []
    this.childTokens = []
    this.elements = []
    this.attributes = {}
    this.displayText = ''
  }

  setTokens(tokens) {
    this.rawTokens = tokens
  }

  initialize() {
    if(this.rawTokens.length === 0 || this.rawTokens.length === 2) {
      // log an error if there are no tokens found during initialization
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
      else if(this.rawTokens.length >= 3) {
        // create child tokens and convert them to child elements
        // we skip the first and last tokens because we already have the attributes from them
        for(let i = 1 ; i < this.rawTokens.length - 1 ; i++) {
          let token = this.rawTokens[i]
          this.childTokens.push(token)
        }

        this.convertTokens()
      }
    }
  }

  convertTokens() {
    // iterate over the tokens that we have and create elements
    // two types of elements are supported:  text, tag
    // text elements are just text that do not have any surrounding tags for style or functionality
    // tag elements have text encapsulated by tags for style or functional enhancements
    let closingTag = null
    let tokens = []
    for(let i = 0 ; i < this.childTokens.length ; i++) {
      let currentToken = this.childTokens[i]
      tokens.push(currentToken)
      if('<' === currentToken[0]) {
        // we have tag element, so do one of the following:
        // 1. create a closing tag if it's null, which indicates we're not currently looking for a tag
        // 2. create a paragraph element if we find the closing tag we're looking for
        // 3. continue iterating because we found a tag, but it's an embedded tag within our current tag
        if(null === closingTag) {
          //construct the closing tag that we're looking for and then iterate until we find it
          closingTag = currentToken
          closingTag = closingTag.replace(/ .+>/, '>') // gets rid of any attributes on the tag
          closingTag = closingTag.replace('<', '</') // adds the '/' to the beginning to indicate the closing tag
        }
        else if(closingTag === currentToken) {
          let paragraphElement = new ParagraphElement()
          paragraphElement.setTokens(tokens)
          paragraphElement.initialize()
          this.elements.push(paragraphElement)
          tokens = [] // creates a new array, effectively clearing it but not so that we don't kill what we just set in the paragraphElement
          closingTag = null
        }
      }
      else if(1 === tokens.length) { // make sure that we don't try to create an element until we find the closing tag
        // this is a text element, so we just need to create an element with the text
        let paragraphElement = new ParagraphElement()
        paragraphElement.setTokens(tokens)
        paragraphElement.initialize()
        this.elements.push(paragraphElement)
        tokens = [] // creates a new array, effectively clearing it but not so that we don't kill what we just set in the paragraphElement
      }
    }
  }
}

export default ParagraphElement