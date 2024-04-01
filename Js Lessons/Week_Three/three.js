let num1 = "10";
num1 *= true + true;

let num2 = "10";
num2 *= 2;

let num3 = "10";
num3 /= 2;
num3 *= 4;

let num4 = "10";
num4 -= 8;
num4 *= 10;

let num5 = "10";
num5 /= 5;
num5 *= 10;

// Solution One
console.log(num1); // 20

// // Solution Two
console.log(num2); // 20

// // Solution Three
console.log(num3); // 20

// // Solution Four
console.log(num4); // 20
// // Solution Five
console.log(num5); // 20

// ---------------------------------------------
let num6 = 3;
num6 /= 3;
num6 *= 6;

let num7 = 3;
num7 *= 2;

let num8 = 3;
num8 += 3;

let num9 = 3;
num9 += true;
num9 += true;
num9 += true;

let num10 = 3;
num10 = ++num10;
num10 = ++num10;
num10 = ++num10;

// Solution One
console.log(num6); // 6

// // Solution Two
console.log(num7); // 6

// // Soultion Three
console.log(num8); // 6

// // Soultion Four
console.log(num9); // 6

// // Solution Five
console.log(num10); // 6
//---------------------------------------------
console.log((10 - 20 + 10) * (15 + 3 + 190 + 400)); // output 0
// -----------------------------------------------
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); //
/*
[++a]
- Value: 11
- Explain:(++a) This is prefix increment 
- [+] Explain: Addition Operator
[+b++]
- Value: 20
- Explain: (+) This is Unary Plus Trnasfer String to Number 
          (b++) This is Postfix Increment
- [+] Explain: Addition Operator
[+c++]
- Value: 80
- Explain: (+) This is Unary Plus Trnasfer String to Number 
          (c++) This is Postfix Increment
- [-] Explain: Subtraction Operator
[+a++]
- Value: 10
- Explain: (+) This is Unary Plus Trnasfer String to Number 
          (a++) This is Postfix Increment
*/
console.log(++a + -b + +c++ - -a++ + +a);
/*
[++a]
- Value: 11
- Explain: (++a) This is prefix increment
- [+] Explain: Addition Operator
[-b]
- Value: -20
- Explain: (-) This is Unary Negation Transfer String To Negative Number
- [+] Explain: Addition Operator
[+c++ ]
- Value: 80
- Explain: (+) This is Unary Plus Trnasfer String to Number 
          (c++) This is Postfix Increment
- [-] Explain: Subtraction Operator
[-a++]
- Value: -10
- Explain: (-) This is Unary Negation Trnasfer String to Negative Number
          (a++) This is Postfix Increment
- [+] Explain: Addition Operator
[+a]
- value: 10
- Explain: (+) This is Unary Plue Trnasfer String to Number 
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
[--c]
- Value: 79
- Explain: (--c) This is Prefix Decrement
- [+] Explain: Addition Operator
[+b]
- Value: 20
- Explain: (+) This is Unary Plus Trnasfer String to Number 
- [+] Explain: Addition Operator
[--a]
- Value: 9
- Explain: (--a) This is Prefix Decrement 
- [*] Explain: Multiplication Operator
[+b++]
- Value: 20
- Explain: (+) This is Unary Plus Trnasfer String to Number 
          (b++) This is Postfix Increment
- [-] Explain: Subtraction Operator
[+b]
- Value: 20
- Explain: (+) This is Unary Plus Transfer String To Number
- [*] Explain: Multiplication Operator
[a]
- Value: 10
- Explain: This is Number
- [+] Explain: Addition Operator
[--a]
- Value: 9
- Explain:(--a) This is prefix Decrement 
- [-] Explain: Subtraction Operator
[+true]
- Value: 1
- Explain: This is Boolean Value
*/
// ------------------------------------------------
let d = "-100";
let e = "20";
let f = 30;
let g = true; //1

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f); // 173
