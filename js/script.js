// scrivi un programma che stampi in console i numeri da 1 a 100



// creare un ciclo che stampi i numeri da 1 a 100

let myList = document.querySelector('ul.list');
for (let i = 1; i <= 100; i++) {
    console.log(i);
    // determinare se il numero sia divisibile per 3(fizz), 5(buzz) oppure entrambi(fizzBuzz)
    if (i % 3 === 0 && i % 5 === 0) {
        type = "FizzBuzz";
        const myListItem = `<li class="fizzBuzz">${type}</li>`;
        myList.innerHTML += myListItem;
    } else if (i % 5 === 0) {
        type = "Buzz";
        const myListItem = `<li class="buzz">${type}</li>`;
        myList.innerHTML += myListItem;
    } else if (i % 3 === 0) {
        type = "Fizz";
        const myListItem = `<li class="fizz">${type}</li>`;
        myList.innerHTML += myListItem;
    } else {
        type = i;
        const myListItem = `<li>${type}</li>`;
        myList.innerHTML += myListItem;
    }
    
}



