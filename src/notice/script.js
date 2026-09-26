const fontSizeButton = document.querySelector('#font-size-button');
const letterBody = document.querySelector('#letter-body');

fontSizeButton.addEventListener('click', () => {
  letterBody.classList.toggle('small-text');
});
