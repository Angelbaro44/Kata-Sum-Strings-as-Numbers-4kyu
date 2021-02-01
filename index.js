//This solution was a bit tough. Since the numbers being tested are larger 
//then the MAX_SAFE_INTEGER, some number calcs will result in errors. The
//solution i thought of is to use classic elementary school calc inorder 
//to ensure a reliable solution. 





function sumStrings(x,y) { 
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
      
        return total[0]==='0' ?Number.parseInt(total).toString() :total; 
      }