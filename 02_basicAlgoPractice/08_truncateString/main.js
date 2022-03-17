console.clear()

// Truncate a string (first argument) if it is longer than the given
// maximum string length (second argument). Return the truncated string
// with a ... ending.

//Slice()
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...'
  }
  return str
}

// //Slice one liner (terneray)
// function truncateString(str, num) {
//   return str.length > num ? str.slice(0, num) + '...' : str
// }

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8)) //should return the string A-tisket....

console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11)) //should return the string Peter Piper....

console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
) //should return the string A-tisket a-tasket A green and yellow basket.

console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  )
) //should return the string A-tisket a-tasket A green and yellow basket.

console.log(truncateString('A-', 1)) //should return the string A....

console.log(truncateString('Absolutely Longer', 2)) //should return the string Ab....
