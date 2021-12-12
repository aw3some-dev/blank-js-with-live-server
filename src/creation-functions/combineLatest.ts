import { combineLatest, fromEvent } from "rxjs";

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temperatureInputEvent$ = fromEvent<any>(temperatureInput, 'input');
const conversionInputEvent$ = fromEvent<any>(conversionDropdown, 'input');

combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe({
    next: ([temperatureInputEvent, conversionInputEvent]) => {
        console.log(
            temperatureInputEvent.target.value,
            conversionInputEvent.target.value
        );

        const temperature = Number(temperatureInputEvent.target.value);
        const conversion = conversionInputEvent.target.value;

        let result: number;

        if (conversion === 'f-to-c') {
            result = (temperature - 32) * 5 / 9;
        } else if (conversion === 'c-to-f') {
            result = temperature * 9 / 5 + 32;
        }

        resultText.innerHTML = String(result);
    }
});
