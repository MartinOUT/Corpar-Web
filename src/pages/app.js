const imageContainers = document.querySelectorAll('.opciones');
const popups = document.querySelectorAll('.popup');

function togglePopup(popup) {
  if (popup.style.display === 'none') {
    popup.style.display = 'block';
    setTimeout(() => (popup.style.opacity = "1"), 10);
  } else {
    popup.style.opacity = "0";
    setTimeout(() => (popup.style.display = 'none'), 400);
  }
}

function hidePopupsExcept(popupToExclude) {
  popups.forEach((popup) => {
    if (popup !== popupToExclude && popup.style.opacity === '1') {
      popup.style.opacity = '0';
      setTimeout(() => (popup.style.display = 'none'), 400);
    }
  });
}

imageContainers.forEach((container) => {
  const image = container.querySelector('img');
  const popup = container.querySelector('.popup');

  image.addEventListener('click', (event) => {
    hidePopupsExcept(popup);
    togglePopup(popup);
    event.stopPropagation();
  });
});

document.addEventListener('click', () => {
  hidePopupsExcept(null);
});
