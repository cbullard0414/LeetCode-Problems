/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xString = x.toString()
    let xArray = xString.split('')
    return xArray.every((num, index) => 
    num === xArray[xArray.length - 1 - index])
};