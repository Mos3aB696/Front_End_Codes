/*
  Modules
    JavaScript modules allow you to break up your code into separate files.
  - Import And Export
  * Export => You can export a function or variable from any file.
    There are two types of exports: Named and Default.
*/
/*
  Modules
  - Export Alias
  - Named Export 
  - Default Export
  - Import All
*/
// You can create named exports two ways:
// [1] In-line individually
/*export*/ let a = 10;
/*export*/ let arr = [1, 2, 3, 4];

/*export*/ function saySomething() {
  return `Something`;
}
// [2] or all at once at the bottom.
// You can make alias to rename what you want to export
export { a as myNumber, arr, saySomething };

// You can only have one default export in a file.
export default function () {
  return `Hello`;
}
