const buttonGrid = document.getElementById('button-grid');
const result = document.getElementById('result');
const currentDisplay = document.getElementById('current-display');
const selected = [];

function updateDisplay() {
  const combined = selected.map(btn => btn.textContent).join('');
  const padded = combined.padEnd(10, '-');
  currentDisplay.textContent = `Current Input: ${padded}`;
}

// Generate all 5-digit combinations from 00000 to 99999
const combinations = [];
for (let i = 0; i <= 99999; i++) {
  const combo = i.toString().padStart(5, '0');
  combinations.push(combo);
}



// Create buttons for each combo
combinations.forEach(combo => {
  const btn = document.createElement('button');
  btn.textContent = combo;
  btn.className = 'combo-btn';

  btn.addEventListener('click', () => {
    if (selected.includes(btn)) {
      btn.classList.remove('selected');
      selected.splice(selected.indexOf(btn), 1);
    } else if (selected.length < 2) {
      btn.classList.add('selected');
      selected.push(btn);
    } else {
      return; //no reaction if twp selected
    }

    updateDisplay();

    if (selected.length === 2) {
      const phoneNumber = selected.map(b => b.textContent).join('');
      result.textContent = `Nice! You entered: ${phoneNumber}.`;
    } else {
      result.textContent = '';
    }
  });

  buttonGrid.appendChild(btn);
});

// Start with empty dashes
updateDisplay();
