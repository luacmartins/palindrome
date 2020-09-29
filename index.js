function palindrome(str) {
   const newStr = str
      .toLowerCase()
      .replace(/_|-/g, '')
      .match(/\w+/g)
      .join('')
   let isPalindrome = true
   for (let i = 0; i < (newStr.length + 1) / 2; i++) {
      if (newStr[i] !== newStr[newStr.length - 1 - i]) {
         isPalindrome = false
      }
   }
   return isPalindrome;
}