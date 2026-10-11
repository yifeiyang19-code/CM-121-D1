import './style.css'

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