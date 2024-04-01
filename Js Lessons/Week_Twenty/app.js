/*
  - You can import modules into a file in two ways,
  based on if they are named exports or default exports
  - Named exports are constructed using curly braces.
  Default exports are not.


  Note 
  Modules only work with the HTTP(s) protocol.
  A web-page opened via the file:// protocol cannot use import / export.
*/
// You can make alias to rename what you import
// Default Export don't put it with Named Export
// You can named Default Export as you want

/*
import mos3ab, { myNumber, arr, saySomething as s } from "./module.js";
console.log(myNumber);
console.log(arr);
console.log(s());
console.log(mos3ab());
*/

// You can Import All thing once
import * as all from "./module.js";
console.log(all);
console.log(all.arr);
console.log(all.saySomething());
console.log(all.default());
