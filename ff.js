const readline = require('readline');
rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
 });

function input(prompt) {
    return new Promise(resolve => rl.question(prompt, answ => resolve(answ)))
}

async function askQuestions(){
    var answer = await input("A great question")
    console.log(answer);
    rl.close()
}

askQuestions()
