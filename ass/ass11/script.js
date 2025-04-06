const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


const altText = {
  'pic1.jpg': 'face',
  'pic2.jpg': 'alien',
  'pic3.jpg': 'spaceship',
  'pic4.jpg': 'planet',
  'pic5.jpg': 'stars'
};


for (const fileName of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${fileName}`);
  newImage.setAttribute('alt', altText[fileName]);
  thumbBar.appendChild(newImage);

  
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${fileName}`);
    displayedImage.setAttribute('alt', altText[fileName]);
  });
}


btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});