const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


const altTexts = {
  'pic1.jpg': 'This is my face',
  'pic2.jpg': 'This is space',
  'pic3.jpg': 'Space Ship',
  'pic4.jpg': 'Alien',
  'pic5.jpg': 'Planets'
};


images.forEach(image => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', altTexts[image]);
  newImage.classList.add('space-thumb'); // Add space-themed styling
  thumbBar.appendChild(newImage);
  
  // Adding click event listener to update displayed image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${image}`);
    displayedImage.setAttribute('alt', altTexts[image]);
  });
});

/* Wiring up the Darken/Lighten button with a space theme touch */
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 80, 0.7)'; // Deep space blue overlay
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 80, 0%)';
  }
});
