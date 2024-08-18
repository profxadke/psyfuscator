#!/usr/bin/env node


const readline = require("readline");



const encode = str => {
  return str.split('').map((e=>e.charCodeAt(0).toString(2).replace(/0/g,' ').replace(/1/g,'\t'))).join('\n');
}


const decode = estr => {
  return estr.replace(/ /g,'0').replace(/\t/g,'1').split('\n').map((e=>String.fromCharCode(parseInt(e,2)))).join('');
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("JS code: ", code => {
  let code_psy = encode(`eval(\`${code}\`);`);
  console.log(`eval(\`${code_psy}\`.replace(/ /g,'0').replace(/\\t/g,'1').split('\\n').map((e=>String.fromCharCode(parseInt(e,2)))).join(''));`);
  rl.close();
});
