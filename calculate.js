import { display } from "./index.js";
export function clearDisplay() {
    display.value = "";
}
export function updateDisplay(input) {
    display.value += input;
}
export function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
