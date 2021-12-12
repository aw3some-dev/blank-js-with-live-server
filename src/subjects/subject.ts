import { fromEvent, Subject } from "rxjs";

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();

fromEvent(emitButton, 'click').subscribe(
    event => value$.next(inputElement.value) 
);

fromEvent(subscribeButton, 'click').subscribe(
    event => {
        console.log('New Subscription');
        value$.subscribe(value => console.log(value));
    }
);




// import { fromEvent, Subject } from "rxjs";

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

const isLoggedIn$ = new Subject<boolean>();

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