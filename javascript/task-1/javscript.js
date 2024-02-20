const button = document.getElementById('thumbs-up-button');
const displayText = document.getElementById('displayText');

button.addEventListener('mouseover', () => {
  displayText.style.display = 'block';
});

button.addEventListener('mouseout', () => {
  displayText.style.display = 'none';
});
