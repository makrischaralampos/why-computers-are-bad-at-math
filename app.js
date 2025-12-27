const form = document.getElementById('addedForm');
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const output = document.getElementById('output');

function parseNumber(value) {
  const normalized = value.trim().replace(',', '.');
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
}

function renderResult(aText, bText, sum) {
  output.textContent = `${aText} + ${bText} = ${sum}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const aText = inputA.value.trim();
  const bText = inputB.value.trim();

  const a = parseNumber(aText);
  const b = parseNumber(bText);

  if (a === null || b === null) {
    output.textContent = 'Please enter valid numbers.';
    return;
  }

  const sum = a + b;
  renderResult(aText, bText, sum);
});

form.requestSubmit();
