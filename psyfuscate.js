#!/usr/bin/env node


const readline = require("readline");


const chop =  (str, size) => {
  // Check if the input string is null; if so, return an empty array.
  if (str == null) return [];
  // Convert the input string to a string if it's not already.
  str = String(str);
  // Convert the size parameter to an integer using the bitwise NOT operator.
  size = ~~size;
  // Check if the size is greater than 0; if so, split the string into chunks of the specified size using a regular expression and return the result as an array.
  return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}

// const binaryAgent = str => str.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join("");

const bin2ascii = binstr => {
  // bin = chop(binstr, 7);
  bin = binstr.split(' ');
  bin = bin.map( item => {
    return parseInt(item, 2);
  }); var bytes = new Uint8Array(bin);
  txt = new TextDecoder('utf-8').decode(bytes);
  return txt
}

const ascii2bin = string => {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}
 
const psyfuscate = code => {
  let code_bin = '';
  let code_psy = '';
  /*
  for ( const c of code ) {
    code_bin += c.charCodeAt(0).toString(2);
  }; console.log(chop(code_bin, 7).join(' '))
  */
  code_bin = ascii2bin(code);
  console.log(code_bin);
  code_psy = code_bin.replaceAll(/ /g, '\n');
  code_psy = code_psy.replaceAll(/0/g, ' ');
  code_psy = code_psy.replaceAll(/1/g, '\t');
  xc = code_psy.replaceAll(/\t/g, '|').replaceAll(/ /g, '-').replaceAll(/\n/g, '.');
  console.log(`console.log(\`${xc}\`.replaceAll(/|/g, '1').replaceAll(/-/g, '0').replaceAll(/./g, ' '));`);
  console.log(`XC:${xc}`.replaceAll(/\|/g, '1').replaceAll(/\-/g, '0').replaceAll(/\./g, ' '));
  return code_psy;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("JS code: ", code => {
  let code_psy = psyfuscate(code);
  let code_bin = code_psy.replaceAll(/\t/g, '1');
  // console.log(code_bin);
  code_bin = code_bin.replaceAll(/ /g, '0');
  // console.log(code_bin);
  code_bin = code_bin.replaceAll(/\n/g, ' ');
  console.log(code_bin);
  code = bin2ascii(code_bin);
  console.log(`console.log(\`${code_psy}\`.replaceAll(/\\t/g, '1').replaceAll(/ /g, '0').replaceAll(/\\n/g, ' '));`);
  rl.close();
});
