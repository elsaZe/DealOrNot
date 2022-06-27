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

let usedAmounts = []
let remainingAmounts = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000]

function assignSuitcases(array) {
    const suitCases = document.querySelectorAll('#suitcases')
    for(let i = 0; i < array.length; i++) {
        let suitCase = document.querySelector(`#suitcase${i+1}`);
        suitCase.textContent =  `$ ${array[i]}`;
        suitCase.addEventListener('click', () => {
            suitCase.className = "show" 
            usedAmounts.push(array[i])
            currentOffer(array[i],remainingAmounts)
            markUnavailable(array[i])
        })
    }
    
}
function currentOffer(element, remain){
       let sum = 0;
        let rmv = 0;
        let reveal = document.querySelector('.reveal')
        for(j=0; j<remain.length; j++){
            if(element === remain[j]){
                remain.splice(j,1)
            } else {
                sum += remain[j]*remain[j];
            }
        }
        rmv = Math.round(Math.sqrt(sum/remain.length))
        let offer = document.querySelector('.offer')
        reveal.addEventListener('click', () => {
            offer.textContent = `$ ${rmv}`})
    return remain
    } 

function markUnavailable(number) {
    const lowDollarAmounts = document.querySelectorAll('.available')
    for (let i = 0; i < lowDollarAmounts.length; i++){
        if (+lowDollarAmounts[i].id == number) {
            lowDollarAmounts[i].className = "unavailable"
        }
        console.log(lowDollarAmounts[i].className)
    }
}



assignSuitcases(shuffleAmounts(dollarAmounts));


    
    
    
/*
    let sum;
    let rmv
    for(let i = 0; i < value.length; i++) { 
        sum += value[i]*value[i] 
        console.log(sum)
    }
    rmv = Math.sqrt(sum/value.length)
    return rmv;
}
*/