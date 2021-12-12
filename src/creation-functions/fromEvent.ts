import { from, fromEvent, Observable, of, timer } from "rxjs";

// fromEvent()
const triggerButton = document.querySelector('button#trigger');

const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe({
    next: event => console.log(event.type, event.x, event.y)
});

// const triggerClick$ = new Observable<MouseEvent>(subscriber => {
//     const clickHandlerFn = function (event:MouseEvent) {
//         console.log('Event callback executed');
//         subscriber.next(event);
//     };

//     triggerButton.addEventListener('click', clickHandlerFn);

//     return () => {
//         triggerButton.removeEventListener('click', clickHandlerFn);
//     };
// });

// const subscription = triggerClick$.subscribe({
//     next: event => console.log(event)
// });

setTimeout(() => {
    console.log('Unsubscribed');
    subscription.unsubscribe();
}, 5000);
