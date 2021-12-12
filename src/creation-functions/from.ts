import { from, fromEvent, Observable, of, timer } from "rxjs";

// from()

from(['Alice', 'Ben', 'Charlie']).subscribe({
    next: value => console.log(value),
    complete: () => console.log('From Completed')
});


const somePromise = new Promise((resolve, reject) => {
    resolve('Resolved');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});