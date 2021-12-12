import { interval, Observable } from "rxjs";

const interval$ = new Observable<number>(subscriber => {
    let counter = 0;

    const intervalId = setInterval(() => {
        subscriber.next(counter++);
    }, 1000);

    return () => clearInterval(intervalId);
});

// interval
const subscription = interval(1000).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed!')
});

setTimeout(() => {
    subscription.unsubscribe();
}, 5000);