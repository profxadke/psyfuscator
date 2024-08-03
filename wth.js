// let bin = '1100011 1101111 1101110 1110011 1101111 1101100 1100101 101110 1101100 1101111 1100111 101000 110010 101001';
let bin = '1100011 1101111 1101110 1110011 1101111 1101100 1100101 101110 1101100 1101111 1100111 101000 110010 101001';
// bin = bin.replaceAll(/ /g, '')
bin = bin.split(' ')
bin = bin.map( item => {
    return parseInt(item, 2);
}); var bytes = new Uint8Array(bin);
txt = new TextDecoder('utf-8').decode(bytes);
console.log(txt);
