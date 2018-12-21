// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }

  this.louder = function() {
    return this.content.toUpperCase();
  };
}

String.prototype.empty = function () {

  return (/^\s+$/.test(this));
}

Array.prototype.lastElement = function() {
  return this[this.length - 1];
}

let numbers = [12, 4, 664, 234, 5, 43, 72, 27];

console.log(numbers.lastElement());
