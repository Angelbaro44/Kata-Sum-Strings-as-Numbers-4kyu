//This solution was a bit tough. Since the numbers being tested are larger 
//then the MAX_SAFE_INTEGER, some number calcs will result in errors. The
//solution i thought of is to use classic elementary school calc inorder 
//to ensure a reliable solution. 

//Here is a link that helped me with the code   :)
//https://stackoverflow.com/questions/46665219/addition-with-carryover-in-arrays-in-pure-javascript





function sumStrings(x, y) {
      let total = "";

      let xLength = x.length;
      let yLength = y.length;

      if (yLength > xLength) {
            let temp = y;
            y = x;
            x = temp;
      }

      let carry = 0;
      let a;
      let b;
      let temp;
      let digitSum;
      for (let i = 0; i < x.length; i++) {
            a = parseInt(x.charAt(x.length - 1 - i));
            b = parseInt(y.charAt(y.length - 1 - i));
            b = b ? b : 0;
            temp = (carry + a + b).toString();
            digitSum = temp.charAt(temp.length - 1);
            carry = parseInt(temp.substr(0, temp.length - 1));
            carry = carry ? carry : 0;

            total = i === x.length - 1 ? temp + total : digitSum + total;
      }

      return total[0] === '0' ? Number.parseInt(total).toString() : total;
}

//Test Cases
console.log(sumStrings('1', '2'))// =>Expected: '3'
console.log(sumStrings('23', '34'))// =>Expected: '57'
console.log(sumStrings('50', '50'))// =>Expected: '100'
console.log(sumStrings('000099', '10000000000'))// =>Expected: '10000000099'
console.log(sumStrings('538490099', '10005678987600'))// =>Expected: '10006217477699'
console.log(sumStrings('9927364840099', '19876542345679872340'))// =>Expected: '19876552273044712439'
console.log(sumStrings('71256931266435732869515139200000002943239', '81008240453032696699370000000239248509'))// =>Expected: '71337939506888765566214509200000242191748'