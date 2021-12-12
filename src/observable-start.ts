// Section 1 - 4
import { Observable } from 'rxjs';

// const observable$ = new Observable(subscriber => {
//     console.log(subscriber);
//     subscriber.next('Alice');
//     setTimeout(() => subscriber.next('Bob'), 2000);
//     setTimeout(() => {
//         subscriber.next('Charlie');
//     }, 4000);
// });

// const observer = {
//     next: (value: any) => console.log(value)
// };

// const subscription = observable$.subscribe(observer);

// setTimeout(() => {
//     console.log('Unsubscribed');
//     subscription.unsubscribe();
// }, 3000);






const helloButton = document.querySelector('button#hello');

const mouseEventObs$ = new Observable<MouseEvent>(subscriber => {
    helloButton.addEventListener('click', (event: MouseEvent) => {
        subscriber.next(event);
    });
});

mouseEventObs$.subscribe(event => {
    console.log('Subscription 1: ', event.type, event.x, event.y);
});

mouseEventObs$.subscribe(event => {
    console.log('Subscription 1: ', event.type, event.x, event.y);
});




// setTimeout
const basicObservable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => {
        subscriber.next('Charlie');
        // subscriber.complete();
    }, 2000);
    setTimeout(() => {
        subscriber.error(new Error('Error'));
    }, 4000);
    return () => {
        console.log('Teardown');
    };
});
const basicObserver = {
    next: (value: any) => console.log(value),
    error: (error: any) => console.log(error.message),
    complete: () => console.log('completed'),
};
console.log('Before Subscription');
basicObservable$.subscribe(basicObserver);
console.log('After Subscription');




// setInterval
let intervalId: any;

const observable$ = new Observable<string>((subscriber) => {
    intervalId = setInterval(() => {
        subscriber.next('Rengoku');
    }, 2000);
    return () => {
        console.log('Teardown');
        clearInterval(intervalId);
    };
});

const observer = {
    next: (value: any) => console.log(value),
};

const subscription = observable$.subscribe(observer);
setTimeout(() => {
    subscription.unsubscribe();
}, 7000);



// const observable$ = new Observable<string>((subscriber) => {
//     console.log('Observable executed');
//     subscriber.next('Alice');
//     subscriber.next('Ben');
//     setTimeout(() => {
//       subscriber.next('Charlie');
//       subscriber.complete();
//     }, 2000);
  
//   // Teardown logic in Observable 
//     return () => {
//       console.log('Teardown');
//     };
//   });
  
//   const observer = {
//     next: (value) => console.log(value),
//     complete: () => console.log('completed'),
//   };
  
  
//   console.log('Before Subscription');
//   observable$.subscribe(observer);
//   console.log('After Subscription');