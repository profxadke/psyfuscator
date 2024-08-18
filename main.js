#!/usr/bin/env node


const fs = require('fs');


const encode = str => {
  return str.split('').map((e=>e.charCodeAt(0).toString(2).replace(/0/g,' ').replace(/1/g,'\t'))).join('\n');
}


const decode = estr => {
  return estr.replace(/ /g,'0').replace(/\t/g,'1').split('\n').map((e=>String.fromCharCode(parseInt(e,2)))).join('');
}

const psyfuscate = code => {
  return `eval(\`${encode(code)}\`.replace(/ /g,'0').replace(/\\t/g,'1').split('\\n').map((e=>String.fromCharCode(parseInt(e,2)))).join(''))`;
}

// const psyfuscated = psyfuscate('console.log(2)')


// fs.writeFileSync('./psyfuscated.js', psyfuscated);

console.log(process.argv.length);
console.log(process.argv.length > 2);
// if 3 (write to [2]); elif 4 (read [2], write[3]); else inp
console.log(process.argv);
console.log(process.argv.slice(2));
