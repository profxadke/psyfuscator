#!/usr/bin/env node


let code_psy = '';
const fs = require('fs');
const readline = require("readline");
const args = process.argv.slice(2);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function input(prompt) {
    return new Promise(resolve => rl.question(prompt, answ => resolve(answ)))
}


const encode = str => {
  return str.split('').map((e=>e.charCodeAt(0).toString(2).replace(/0/g,' ').replace(/1/g,'\t'))).join('\n');
}


const psyfuscate = code => {
  return `eval(\`${encode(code)}\`.replace(/ /g,'0').replace(/\\t/g,'1').split('\\n').map((e=>String.fromCharCode(parseInt(e,2)))).join(''))`;
}


/*
const decode = estr => {
  return estr.replace(/ /g,'0').replace(/\t/g,'1').split('\n').map((e=>String.fromCharCode(parseInt(e,2)))).join('');
}
*/


if (args.length == 2) {
  code = fs.readFileSync(args[0], {encoding: 'utf-8'});
  code_psy = psyfuscate(code);
  fs.writeFileSync(args[1], code_psy);
  process.exit(0);
}


input("JS code: ", code => {
  console.log(code);
})

/*
rl.question("JS code: ", code => {
  code_psy = psyfuscate(code);
  // console.log(code_psy);
});
*/


if (args.length) {
  fs.writeFileSync(args[0], code_psy);
  rl.close();
} else {
  rl.question("File save path: ", filepath => {
    fs.writeFileSync(filepath, code_psy);
  });
}
