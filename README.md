# Kata-Sum-Strings-as-Numbers-4kyu


Description:
-
Given the string representations of two integers, return the string representation of the sum of those integers.

     For example:

     sumStrings('1','2') // => '3'
     A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

 So what is the difficulty all about?
 -
 The random test is performed with numbers that are larger than the "Number.MAX_SAFE_INTEGER".I think it would be best for the random tests  be performed with such large integers that overflow would prove to be an issue.

    Example of error: sumStrings('712569312664357328695151392', '8100824045303269669937') =>
     Expected: '712577413488402631964821329', instead got: '7.125774134884027e+26'









Test Cases:
-

     function msg(a,b) {
       if(typeof returned !== 'string') {
         return 'Function must return a string value'
       } else {
         return "sumStrings('" + a + "', '" + b + "')"
       }
     }
     function t(a,b,ans) {
       returned = sumStrings(a,b)
       Test.assertEquals(returned,ans, msg(a,b, returned))
     }
     t('123', '456', '579')

     t('8797', '45', '8842')
     t('800', '9567', '10367')
     t('99','1','100') 
     t('00103', '08567', '8670')
     t('','5','5')
     t('712569312664357328695151392',
            '8100824045303269669937',
       '712577413488402631964821329')
     t('50095301248058391139327916261',
       '81055900096023504197206408605',
       '131151201344081895336534324866')

     const BigNumber = require('bignumber.js');

     function sumStringsSol(a,b) { 
       if (!a) a = '0';
       if (!b) b = '0';
       return (new BigNumber(a).plus(new BigNumber(b))).toFixed(0);
     }  

     for (let i = 0; i < 50; i++) {
       let a = BigNumber.random(30).toString().slice(2),
           b = BigNumber.random(30).toString().slice(2),
           ans = sumStringsSol(a,b);
       t(a, b, ans);
     }  
