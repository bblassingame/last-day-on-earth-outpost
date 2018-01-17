import ParagraphElement from './paragraph-element'

// characters when I'm looking for the start of a tag and getting everything up to the end
const LEFT_ANGLE_BRACKET = '<'
const RIGHT_ANGLE_BRACKET = '>'

class Paragraph extends ParagraphElement
{
  constructor() {
    super()
    this.rawText = ''
  }

  setRawText(rawText) {
    this.rawText = rawText
  }

  initialize() {
    if(this.rawText === '') {
      console.log('ERROR:  It looks like you didn\'t set any child tokens.  Skipping this paragraph')
    }

    this.tokenize()
    this.convertTokens()
  }

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