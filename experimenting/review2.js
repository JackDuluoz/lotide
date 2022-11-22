const countLetters = function(str) {

  const result = {}

  for (let letter of str) {
   
      if (!result[letter]) {
     
        result[letter] = 0
      
      }
    

    result[letter]++
  }

return result
}

console.log(countLetters("lighthouse labs in the house"));