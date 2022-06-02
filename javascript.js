const suitcaseNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
const dollarAmounts = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000]

function shuffleAmounts (array) {
    let i = array.length;
    let j = 0;      
    let temp;
    while(i--) {
        j = Math.floor(Math.random()*(i+1))
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function assignSuitcases(array) {
    const suitCases = document.querySelectorAll('.suitcases')
    for(let i = 0; i < array.length; i++) {
        let suitCase = document.querySelector(`.suitcase${i+1}`);
        suitCase.textContent =  `$ ${array[i]}`
    }
}

let shuffledAmounts = shuffleAmounts(dollarAmounts);

assignSuitcases(shuffledAmounts);
