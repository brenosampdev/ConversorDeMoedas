const selectFrom = document.getElementById('currency-from');
const selectTo = document.getElementById('currency-to');
const inputValue = document.getElementById('input-value');
const convertButton = document.getElementById('convert-button');
const resultSection = document.getElementById('result-section');
const resultContainer = document.getElementById('result-container');
const sectionInputs = document.querySelector('.section-inputs');

async function fetchSupportedCurrencies() {
  try {
    const res = await fetch('http://localhost:3000/currencies');
    const json = await res.json();
    selectFrom.innerHTML = '';
    selectTo.innerHTML = '';
    json.currencies.forEach(({ code, name }) => {
      selectFrom.append(new Option(`${code} – ${name}`, code));
      selectTo.append(new Option(`${code} – ${name}`, code));
    });
  } catch (error) {
    console.error('Erro ao buscar moedas:', error);
    alert('Não foi possível carregar moedas.');
  }
}

convertButton.addEventListener('click', async event => {
  event.preventDefault();
  const rawValue = inputValue.value;
  const valor = parseFloat(rawValue.replace(/\./g, '').replace(',', '.'));
  const de = selectFrom.value;
  const para = selectTo.value;

  if (de === para) return alert("Escolha moedas diferentes para conversão.");
  if (!rawValue || isNaN(valor)) return alert("Digite um valor válido.");
  if (isNaN(valor) || !de || !para) return alert("Preencha os campos corretamente.");

  try {
    const res = await fetch('http://localhost:3000/converter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valor, de, para })
    });
    const data = await res.json();
    if (data.valorConvertido && data.cotacaoAtual) {
        sectionInputs.style.borderRadius = "1rem 1rem 0 0";
        resultSection.style.display = 'block';
        resultSection.style.borderRadius = "0 0 1rem 1rem";
        resultContainer.innerHTML = `
            <p>1 ${de} = ${parseFloat(data.cotacaoAtual).toFixed(2)} ${para}</p>
            <h1>${data.valorConvertido} ${para}</h1>
        `;
    }
  } catch (error) {
    console.error('Erro ao conectar com a API:', error);
    alert("Erro ao conectar com a API. Tente novamente mais tarde.");
  }
});

inputValue.addEventListener('input', e => {
  let val = e.target.value.replace(/\D/g, '');
  if (val) {
    val = (parseInt(val, 10) / 100).toFixed(2);
    val = val.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    e.target.value = val;
  } else {
    e.target.value = '';
  }
});

fetchSupportedCurrencies();

window.addEventListener('DOMContentLoaded', () => {
  resultSection.classList.contains('hidden')
    ? sectionInputs.style.borderRadius = "1rem"
    : sectionInputs.style.borderRadius = "1rem 1rem 0 0";
});