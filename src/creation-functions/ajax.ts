import { ajax } from 'rxjs/ajax';

// https://random-data-api.com/

const ajax$ = ajax<any>('https://random-data-api.com/api/food/random_food');

ajax$.subscribe(
    data => console.log('Sub 1: ', data.response.dish)
);

ajax$.subscribe(
    data => console.log('Sub 2: ', data.response.dish)
);

ajax$.subscribe(
    data => console.log('Sub 3: ', data.response.dish)
);