import {convert} from './lib.js';
import {fromInput, fromSelect, toSelect, toEl} from './elements.js';
import { formatCurrency } from './utils.js'

export async function handleInput(e) {
    const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}