// scrivi un programma che stampi in console i numeri da 1 a 100



// creare un ciclo che stampi i numeri da 1 a 100
let type;

let myList = document.querySelector('ul.list');
for (let i = 1; i <= 100; i++) {
    console.log(i);
    const myListItem = document.createElement('li');
    // determinare se il numero sia divisibile per 3(fizz), 5(buzz) oppure entrambi(fizzBuzz)
    if (i % 3 === 0 && i % 5 === 0) {
        type = "FizzBuzz";
        myListItem.append(type);
    } else if (i % 5 === 0) {
        type = "Buzz";
        myListItem.append(type);
    } else if (i % 3 === 0) {
        type = "Fizz";
        myListItem.append(type);
    } else {
        type = i;
        myListItem.append(type);
    }
    myList.append(myListItem);
}

// inserire gli elementi nella pagina html

// applicare uno stile differente a seconda del valore dell'indice per i multipli di 3, 5 o entrambi

