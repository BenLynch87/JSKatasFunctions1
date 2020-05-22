function sum (x, y){
    return x + y;
}
console.log('Kata 1', sum(5,9))
console.log('Kata 1', sum(5,4))

function avg(x, y, z){
    return (x + y + z)/3;
}
console.log('Kata 2', avg(1, 5, 9))
console.log('Kata 2', avg(4, 4, 4))
console.log('Kata 2', avg(10, 4, 1))

function greaterThan(x, y){
    if (x < y){
        return true;
    } else {
        return false;
    }
}
console.log('Kata 3', greaterThan(5, 6))
console.log('Kata 3', greaterThan(4, 1))

function secondLargest(array){
    let largest = 0;
    let nextLargest = 0;
    for (let i = 0; i < array.length; i++){
        if (largest < array[i]){
            nextLargest = largest;
            largest = array[i];
        }
    }
    return nextLargest;
}
console.log('Kata 4', secondLargest([1, 4, 5, 8]))
console.log('Kata 4', secondLargest([8, 3, 5, 1, 9, 10]))

function containsVowel(string){
    string.toLowerCase();
    if (string.includes('a') || string.includes('e') || string.includes('i') ||
     string.includes('o') || string.includes('u') || string.includes('y')){
        return true;
    } else {
        return false;
    }
}
console.log('Kata 5', containsVowel('alpha'));
console.log('Kata 5', containsVowel('hmph'));

function tip(x){
    return Math.ceil(x * .2);
}
console.log('Kata 6', tip(57))
console.log('Kata 6', tip(32))

function longestWord(string){
    let words = string.split(' ');
    let longest = "";
    for (let i = 0; i < words.length; i++){
        if (longest.length < words[i].length){
            longest = words[i];
        }
    }
    return longest;
}
console.log('Kata 7', longestWord('have you ever seen a penguin go to tea?')); 
console.log('Kata 7', longestWord('fool me once, shame on me. fool me twice, shame on heathcliff'));

function weave(str, n){
    let splitStr = str.split("")
    for (let i = n - 1; i < splitStr.length; i += n){
        splitStr[i] = 'x';
    }
    return splitStr.join("")
}
console.log('Kata 8',weave('hi how are you', 2))
console.log('Kata 8',weave('im terrible, go away', 5))

function piglatin(str){
    let splitStr = str.split(' ')
    for (let i = 0; i < splitStr.length; i++){
        let word = splitStr[i].split('');
        let c = word.shift();
        splitStr[i] = word.join('') + c + 'ay';
    }
    return splitStr.join(' ');
}
console.log('Kata 9', piglatin('good day'));
console.log('Kata 9', piglatin('hall door'));

function multiples(x, y){
    let results = [0];
    for (let i = 1; results[results.length -1] < 100; i++){
        results[i - 1] = x * y * i;
    }
    results.pop();
    return results;
}
console.log('Kata 10 ', multiples(3, 5))
console.log('Kata 10 ', multiples(7, 12))

function blackjack(array){
    let total = 0;
    let aces = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'J' || array[i] === 'Q' || array[i] === 'K'){
            array[i] = 10;
        }
        if (array[i] !== 'A'){
            total += array[i]
        } else {
            aces++;
        }
    }
    while (aces > 0){
        if (total < 11){
            total += 11;
            aces--;
        } else {
            total += 1;
            aces--;
        }
    }
    if (total < 21){
        return total;
    } else if (total === 21){
        return 'Blackjack!'
    } else {
        return 'Bust!'
    }
}
console.log('Kata 11 ', blackjack(['J', 3, 4, 5, 6]))
console.log('Kata 11 ', blackjack(['J', 'Q', 'A']))
console.log('Kata 11 ', blackjack(['J', 3, 4, 'A']))
console.log('Kata 11 ', blackjack(['K', 'A']))

function divisors(x){
    let results = [];
    for (let i = 1; i < x + 1; i++){
        if (x % i === 0){
            results.push(i);
        }
    }
    return results;
}
console.log('Kata 12 ', divisors(9))
console.log('Kata 12 ', divisors(17))
console.log('Kata 12 ', divisors(92))

function hamming(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    let str1s = str1.split('');
    let str2s = str2.split('');
    let count = 0
    for (let i = 0; i < str1.length; i++){
        if (str1s[i] === str2s[i]){
            count++;
        }
    }
    return count;
}
console.log('Kata 13 ', hamming('yatin','thang'))
console.log('Kata 13 ', hamming('hello','hello'))
console.log('Kata 13 ', hamming('hello','hewwo'))
console.log('Kata 13 ', hamming('hello','helloo'))

function pokemon(array){
    const caught = Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++){
        for (let i2 = i; i2 >= 0; i2--){
            caught[i] += array[i2];
        }
    }
    return caught;
}
console.log('Kata 14 ', pokemon([1, 2, 5, 1, 3]))

function find(array, x){
    for (let i = 0; i < array.length; i++){
        if (array[i] === x){
            return i;
        }
    }
    return 'Not found';
}
console.log('Kata 15 ', find([1,2,3,4], 3))
console.log('Kata 15 ', find([4,4,4,4], 4))
console.log('Kata 15 ', find([1,2,2,4], 3))

function map(array, f){
    for (let i = 0; i < array.length; i++){
        array[i] = f(array[i]);
    }
    return array;
}
console.log('Kata 16 ', map([1,2,3],function(a){return a}))
console.log('Kata 16 ', map([3,2,1],function(a){return a+2}))
console.log('Kata 16 ', map([0,2,4],function(a){return a*4}))

function filter(array, f){
    let r = []
    for (let i = 0; i < array.length; i++){
        if (f(array[i])){
            r.push(array[i])
        }
    }
    return r;
}
console.log('Kata 17 ', filter([1,2,3,4], function(a){return a%2===0}))
console.log('Kata 17 ', filter([1,2,3,4], function(a){return a%2===1}))

function sprint(array){
    let fastest = 10;
    let name = '';
    for (let i = 0; i < array.length; i++){
        if (array[i]['time'] < fastest){
            fastest = array[i]['time'];
            name = array[i]['name']
        }
    }
    return name;
}
console.log('Kata 18 ', sprint([{'name':'jo','time':1},{'name':'job','time':2},{'name':'jon','time':3}]))

function scrabble(str, obj){
    str.split('');
    let total = 0;
    for (let i = 0; i < str.length; i++){
        total += obj[str[i]];
    }
    return total;
}
console.log('Kata 19 ', scrabble('abc',{'a':1,'b':2,'c':3}))
console.log('Kata 19 ', scrabble('banana',{'a':1,'b':2,'n':3}))