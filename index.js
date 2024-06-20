import { clearDisplay, updateDisplay, calculate } from "./calculate.js";

export const display = document.getElementById("display");

window.updateDisplay = updateDisplay;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
window.percent = percent;
