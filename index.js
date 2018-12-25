module.exports = Phrase;

// Adds Reverse to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

// Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi;
    return Array.from(this.content).filter(c => c.match(lettersRegEx)).join("");
    // return (this.content.match(/[a-z]/gi) || []).join("");
    }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if(this.processedContent()){
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}
