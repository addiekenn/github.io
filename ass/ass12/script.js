const quotes = [
    "Wubba Lubba Dub Dub!",
    "I'm sorry, but your opinion means very little to me.",
    "What, so everyone's supposed to sleep every single night now?",
    "Sometimes science is more art than science, Morty.",
    "Get Schwifty!",
    "Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die."
  ];
  
  async function getCharacter() {
    const spinner = document.getElementById('spinner');
    const nameEl = document.getElementById('char-name');
    const imgEl = document.getElementById('character-img');
    const quoteEl = document.getElementById('quote');
    const speciesEl = document.getElementById('species');
  
    // spinner
    spinner.style.display = 'block';
    nameEl.textContent = '';
    imgEl.style.display = 'none';
    quoteEl.textContent = '';
    speciesEl.textContent = '';
  
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();
      const total = data.info.count;
  
      const randomId = Math.floor(Math.random() * total) + 1;
      const charRes = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
      const charData = await charRes.json();
  
      spinner.style.display = 'none';
      nameEl.textContent = charData.name;
      imgEl.src = charData.image;
      imgEl.style.display = 'block';
      quoteEl.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
      speciesEl.textContent = `Species: ${charData.species}`;
    } catch (error) {
      spinner.style.display = 'none';
      nameEl.textContent = 'Failed to load character 😢';
      console.error('Error fetching character:', error);
    }
  }
  
  