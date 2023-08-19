// Good Luck 💪🏾
countString:"fikrcamp bootcamp"
function countString(str, letter) {

    const re = new RegExp(letter, '');

    const count = str.match(re).length;

    return count;
}

const string = prompt('fikrcamp bootcamp');
const letterToCheck = prompt('o');

const result = countString(string, letterToCheck);

console.log(result);