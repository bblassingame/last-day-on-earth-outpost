import PageElement from './page-element'

import { parseAttributes } from '../../utility/regex-utils'

class ParagraphElement extends PageElement
{
  constructor() {
    super()
    this.rawTokens = []
    this.childTokens = []
    this.elements = []
    this.attributes = {}
    this.displayText = ''
  }

  getType() {
    return 'ParagraphElement'
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
      // strip off the greater/less than brackets
      let strippedTag = this.rawTokens[0].slice(1, -1)
      
      // check for a space.  if we have a space, grab the tag and attributes.  otherwise just grabb the tag.
      const index = strippedTag.indexOf(' ')
      if(-1 !== index) {
        // grab the tag first, the get the rest of the attributes
        this.attributes['tag'] = strippedTag.substring(0, index)

        // split out each set of attributes and values within the tag
        //let attrTokens = strippedTag.substring(index + 1).split(/\w+="[^"]"/)
        let attrTokens = parseAttributes(strippedTag.substring(index + 1))

        // begin iterating after the first token since that's the actual tag
        for(let i = 0 ; i < attrTokens.length ; i++) {
          let attrAndValue = attrTokens[i].split('=') // split the attribute and its value EX:  src="http://www.google.com"
          const attr = attrAndValue[0] // the attribute is before the equals  Ex: attr = src
          const value = attrAndValue[1].slice(1, -1) // the value is after the equals and we slice off the quotes  Ex: value = http://www.google.com
          this.attributes[attr] = value
        }
      }
      else {
        this.attributes['tag'] = strippedTag
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

        this.createChildElements()
      }
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