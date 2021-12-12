import { from, fromEvent, Observable, of, timer } from "rxjs";

// of()

of('Alice', 'Ben', 'Charlie')
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('Completed')
    });

// The rxjs of() function has some optimization techniques though that make it better than
// this custom function but generally, its the same idea

function myOwnOf(...args: string[]): Observable<string> {
    return new Observable<string>(subscriber => {
        for (let i = 0; i < args.length; i++) {
            subscriber.next(args[i]);
        }
        subscriber.complete();
    });
}