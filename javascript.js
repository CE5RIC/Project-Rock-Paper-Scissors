function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)];
}


console.log(computerPlay(['Rock', 'Paper', 'Scissors']));


