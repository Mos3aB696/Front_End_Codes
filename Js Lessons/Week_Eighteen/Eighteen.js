// document.body.style.background = "rgb(68 64 64)";
/*
  Regular Expression
  - Email
  - Ip
  - Phone
  - URL
*/
/*
  Regular Expression
    Regular expressions are patterns used to match character combinations in strings
  Syntax
  /Pattern/modifier(s); => Using a regular expression literal
  new RegExp("pattern", "modifier(s)") =>  the constructor function
    Use constructor function when:
      * you know the regular expression pattern will be changing
      * you don't know the pattern and are getting it from another source,
        such as user input

  Modifiers => Flages
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Patterns)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Mathches
  -- Returns null If No Match Is Found 
*/
let myString = "Hello Elzero Web School I Love elzero";
// Use Normal Way
let re = /elzero/gi;
// Use Modern way
let newRe = new RegExp("elzero", "ig");

console.log(myString.match(newRe));
console.log(myString.match(re));
// -----------------------------------------------------------
/*
  Regular Expression

  Ranges

  Part one
  (X | Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  Part Two
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/
// Part One

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|Org|io)/gi;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNumsRe = /[^0-2]/g;
console.log(notNums.match(notNumsRe));

let spicalCharacters = "1!2@3#4%5^6&78910";
let spicalCharactersRe = /[^0-9]/g;
console.log(spicalCharacters.match(spicalCharactersRe));

let practice = "os1 os1os os2 os8 os8os os5os";
let practiceRe = /(os[5-9]os)/g;
console.log(practice.match(practiceRe));
// -----------------------------------------------------------
// Part Two

let string = "AaBbcdefG123!234%^&*";
// [1]
let atozSmall = /[a-z]/g;
console.log(string.match(atozSmall));
// [2]
let notAtozSmall = /[^a-z]/g;
console.log(string.match(notAtozSmall));
// [3]
let atozCapital = /[A-Z]/g;
console.log(string.match(atozCapital));
// [4]
let notAtozCapital = /[^A-Z]/g;
console.log(string.match(notAtozCapital));
// [5]
let onlyAbcd = /[abcd]/g;
console.log(string.match(onlyAbcd));
// [6]
let notAbcd = /[^abcd]/g;
console.log(string.match(notAbcd));
// [7]
let atozCapitalAndSmall = /[a-z]/gi;
console.log(string.match(atozCapitalAndSmall));
// [8]
let notAtozCapitalAndSmall = /[^a-z]/gi;
console.log(string.match(notAtozCapitalAndSmall));
// [9]
let onlySpicals = /[^a-z1-9]/gi;
console.log(string.match(onlySpicals));
// -----------------------------------------------------------
/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z A-Z 0-9 And Underscore]
  \W => matches non word characters
  \d => matches digits from 0 to 9
  \D => matches non-digits character
  \s => matches withespace character
  \S => matches non withespace character
*/

let email = "o@@@g...com o@g.com o@g.net A@Y.com O-g.com o@s.org 1@1.com";

// [1]
let dot = /./g;
console.log(email.match(dot));
// [2]
let word = /\w/g;
console.log(email.match(word));
// [3]
let nonWord = /\W/g;
console.log(email.match(nonWord));
// [4]
let digits = /\d/g;
console.log(email.match(digits));
// [5]
let nonDigits = /\D/g;
console.log(email.match(nonDigits));
// [6]
let withespace = /\s/g;
console.log(email.match(withespace));
// [7]
let nonWithespace = /\S/g;
console.log(email.match(nonWithespace));
// [8]
let valid = /\w@\w.(com|org)/g;
console.log(email.match(valid));
// -----------------------------------------------------------
/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word

  Test Method
  pattern.test(input)
    method tests for a match in a string.
    If it finds a match, it returns true, otherwise it returns false.
*/
let names = "Sayed 1Spam 3Spam Spam5 Osama Ahmed Aspamo";
let spamRe = /(\bspam|spam\b)/gi;
console.log(names.match(spamRe));

console.log(spamRe.test(names));
console.log(/(\bspam|spam\b)/gi.test("Mos3aB"));
console.log(/(\bspam|spam\b)/gi.test("Spam5"));
// -----------------------------------------------------------
/*
  Regular Expression

  Quantifiers [Part One]
  => Quantifiers indicate numbers of characters or expressions to match.
  n+   => One Or More
  n*   => zero or more
  n?   => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@gmail.ru"; // All Emails
// [1] com | net
let mailsRe = /\w+@\w+.(com|net)/gi;
console.log(mails.match(mailsRe));
// [2] All
let allMailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(allMailsRe));

let testNums = "0110 10 150 05120 0560 350 00"; // 0 Numbers or no 0
let testNumsRe = /0\d*0/gi;
console.log(testNums.match(testNumsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
// [1] http + https
let urlsRe = /https?:\/\/(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));
// [2] All
let allUrlsRe = /(https?)?(:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(allUrlsRe));
// -----------------------------------------------------------
/*
  Regular Expression

  Quantifiers [Part Two]
  n{x}   => Number of
  n{x, y}   => Range
  n{x,}   => At Least x 
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/S\d{3}S/gi)); // S[Three Numbers]S
console.log(serials.match(/S\d{4,5}S/gi)); // S[Four Or Five Numbers]S
console.log(serials.match(/S\d{4,}S/gi)); // S[At Least Numbers]S
// -----------------------------------------------------------
/*
  Regular Expression

  Quantifiers [Part Three]
  $   => End With Something
  ^   => Start With Something
  ?=  => Followed By Something
  ?!  => Not Followed By Something 
*/
let ourString = "We Love Programming";
let teamNames = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
// [1]
console.log(/ing$/gi.test(ourString));
console.log(/lz$/g.test(teamNames));
// [2]
console.log(/^we/gi.test(ourString));
console.log(/^1/g.test(teamNames));
console.log(/^\w/g.test(ourString));
console.log(/^\s/g.test(ourString));
console.log(/^\d/g.test(teamNames));
// [3]
console.log(teamNames.match(/\d\w{5}(?=z)/gi));
console.log(teamNames.match(/\d\w{8}(?!z)/gi));
// -----------------------------------------------------------
/*
  Regular Expression

  - replace
    Replaces first match with string or all matches with RegExp,
    and does not change the original string.
  - replaceAll
*/
let text = "We Love Programming And @ Because @ Is Amazing";
let textRe = text.replace(/@/gi, "JavaScript");
// [1]
console.log(textRe);
console.log(text);
// console.log(text.replaceAll("@", "JavaScript"));
// [2]
let Re = /@/gi;
console.log(text.replaceAll(Re, "JavaScript"));
console.log(text.replaceAll(/@/gi, "JavaScript"));
// -----------------------------------------------------------
/*
  Regular Expression
  - Input Form Validation Practice
*/
document.getElementById("register").onsubmit = function (e) {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    e.preventDefault();
  }
  return true;
};
// -----------------------------------------------------------
/*
  Regular Expression 

  Methods
  - pattern.exec(input) => Execute
    method tests for a match in a string.
    If it finds a match, it returns a result array, otherwise it returns null.
*/

let executeTest = "I Love Programming, And love JavaScript";
let executeTestRe = /\s\w{4}\s/g;
console.log(executeTestRe.exec(executeTest));
console.log(executeTestRe.exec(executeTest));
console.log(executeTestRe.exec(executeTest));
console.log(executeTestRe.test("Love"));
// -----------------------------------------------------------
/*
  Regular Expression 

  Methods
  - search(strName) => 
    method returns the index (position) of the first match.
    method returns -1 if no match is found.
    method is case sensitive.

  The Difference Between String search() and String match()?
    The search() method returns the position of the first match.
    The match() method returns an array of matches.


*/
console.log(executeTest.search("love"));
