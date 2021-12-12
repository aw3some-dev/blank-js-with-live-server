import { Observable, timer } from "rxjs";

// timer
const subscription = timer(2000).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed!')
});

const timer$ = new Observable<number>(subscriber => {
    const timeoutId = setTimeout(() => {
        subscriber.next(0);
        subscriber.complete();
    }, 2000);

    return () => clearTimeout(timeoutId);
});

setTimeout(() => {
    subscription.unsubscribe();
}, 1000);