import { BehaviorSubject, fromEvent, Subject, withLatestFrom } from "rxjs";

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(event => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(event => isLoggedIn$.next(false));

// Navigation Bar
isLoggedIn$.subscribe(
    isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
);

// Buttons
isLoggedIn$.subscribe(isLoggedIn => {
    loginButton.style.display = !isLoggedIn ? 'block' : 'none';
    logoutButton.style.display = isLoggedIn ? 'block' : 'none';
});

fromEvent(printStateButton, 'click').subscribe(event => {
    isLoggedIn$.subscribe(isLoggedIn => console.log(isLoggedIn$.value));
});

// fromEvent(printStateButton, 'click')
//     .pipe(withLatestFrom(isLoggedIn$))
//     .subscribe(([event, isLoggedIn]) => {
//         console.log(isLoggedIn);
//     });