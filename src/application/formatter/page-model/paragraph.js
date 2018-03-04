import ParagraphElement from './paragraph-element'

// characters when I'm looking for the start of a tag and getting everything up to the end
const LEFT_ANGLE_BRACKET = '<'
const RIGHT_ANGLE_BRACKET = '>'

class Paragraph extends ParagraphElement
{
  constructor() {
    super()
    this.paragraphData = null
    this.rawText = ''
    this.hasId = ''
    this.idName = ''
  }

  getType() {
    return 'Paragraph'
  }

  setParagraphData(paragraphData) {
    this.paragraphData = paragraphData
  }

  initialize() {
    this.rawText = this.paragraphData.text
    this.hasId = this.paragraphData.id
    this.idName = this.paragraphData.idName

    if(this.rawText === '') {
      console.log('ERROR:  It looks like you didn\'t set any text.  Skipping this paragraph')
    }

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
}

export default Paragraph