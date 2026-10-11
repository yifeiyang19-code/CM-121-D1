import './style.css'
import { createInitialGameState } from './state'
import { manualGenerate } from './input'

let state = createInitialGameState();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="station">
    <h1>Power Station</h1>
    <p>Restore the abandoned power station.</p>

    <section>
      <h2>Energy Status</h2>
      <p>Stored Energy: <output id="energy">0</output> EU</p>
      <p>Total Produced: <output id="total-energy">0</output> EU</p>
    </section>

    <button id="generate" type="button">
      Generate Energy
    </button>
  </main>
`
const button = document.querySelector<HTMLButtonElement>('#generate');
const energyOutput = document.querySelector<HTMLOutputElement>('#energy');
const totalEnergyOutput = document.querySelector<HTMLOutputElement>('#total-energy');

if (!button || !energyOutput || !totalEnergyOutput) {
  throw new Error('Missing required elements in the DOM');
}

button.addEventListener('click', () => {
  state = manualGenerate(state);
  energyOutput.textContent = state.energy.toString();
  totalEnergyOutput.textContent = state.totalEnergyProduced.toString();
});