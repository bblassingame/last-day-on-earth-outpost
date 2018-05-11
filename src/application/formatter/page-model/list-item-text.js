import ListItemElement from './list-item-element'

// characters when I'm looking for the start of a tag and getting everything up to the end
const LEFT_ANGLE_BRACKET = '<'
const RIGHT_ANGLE_BRACKET = '>'

class ListItemText {
  constructor() {
    this.rawProperties = {}
    this.rawText = ''
    this.childTokens = []
    this.elements = []
    this.isLink = false
    this.linkSrc = ''
    this.linkEvent = ''
  }

  getType() {
    return 'ListItemText'
  }

  setRawProperties(properties) {
    this.rawProperties = {...properties}
  }

  initialize() {
    // convert the raw properties to member properties
    this.rawText = this.rawProperties.text
    this.isLink = this.rawProperties.link
    this.linkSrc = this.rawProperties.linkTo
    this.linkEvent = this.rawProperties.event

    this.tokenize()
    this.createChildElements()
  }

  // this method looks to see if we have any tags in this portion of text.  if we find tags,
  // we're going to iterate over the text and extract the plain text and the text surrounded
  // by tags.  We'll add each section (token) to our childTokens array to convert into paragraph elements
  // Ex:
  //|        Token       |  Token  |  T | T|        Token        |           Token         |     Token    | T |        Token       |
  // blah blah blah blah <L to="me">blah</L> blah blah blah blah <OL to="you" event="hello">blah blah blah</OL> blah blah blah blah 
  tokenize() {
    // check if there is a tag in the paragraph and if so, tokenize things out
    if(this.rawText.indexOf(LEFT_ANGLE_BRACKET !== -1)) {
      let currentIndex = 0
      let lastIndex = currentIndex
      let token = null

      while(currentIndex !== -1 && currentIndex <= this.rawText.length) {
        switch(this.rawText[currentIndex]) {
          case LEFT_ANGLE_BRACKET:
            // store everything up to this point as a token
            token = this.rawText.substring(lastIndex, currentIndex)
            this.childTokens.push(token)
            // update the last index
            lastIndex = currentIndex
            break

          case RIGHT_ANGLE_BRACKET:
            // store everything up to this point as a token
            currentIndex++ // increment the index to include the right angle bracket
            token = this.rawText.substring(lastIndex, currentIndex)
            this.childTokens.push(token)
            // update the last index
            lastIndex = currentIndex
            break
          
          default: // we don't need to do anything, just keep incrementing
            break
        }

        currentIndex++
      }

      // make sure we pick up the last of the text
      if(lastIndex != -1 && lastIndex != currentIndex) {
        let token = this.rawText.substring(lastIndex)
        this.childTokens.push(token)
      }
    }
    else {
      // no tags, just add some text
      this.childTokens.push(this.rawText)
    }
  }

  createChildElements() {
    // iterate over the tokens that we have and create our child elements
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
        // 1. create a closing tag if it's null, which indicates we don't currently have a tag set
        // 2. create a paragraph element if we find the closing tag we're looking for
        // 3. continue iterating because we found a tag, but it's an embedded tag within our current tag
        if(null === closingTag) {
          //construct the closing tag that we're looking for and then iterate until we find it
          closingTag = currentToken
          closingTag = closingTag.replace(/ .+>/, '>') // gets rid of any attributes on the tag
          closingTag = closingTag.replace('<', '</') // adds the '/' to the beginning to indicate the closing tag
        }
        else if(closingTag === currentToken) {
          let listItemElement = new ListItemElement()
          listItemElement.setTokens(tokens)
          listItemElement.initialize()
          this.elements.push(listItemElement)
          tokens = [] // creates a new array, effectively clearing it but not so that we don't kill what we just set in the listItemElement
          closingTag = null
        }
      }
      else if(1 === tokens.length) { // make sure that we don't try to create an element until we find the closing tag
        // this is a text element, so we just need to create an element with the text
        let listItemElement = new ListItemElement()
        listItemElement.setTokens(tokens)
        listItemElement.initialize()
        this.elements.push(listItemElement)
        tokens = [] // creates a new array, effectively clearing it but not so that we don't kill what we just set in the paragraphElement
      }
    }
  }
}

export default ListItemText