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
