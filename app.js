// GLOBAL VARIABLES
let shelf = document.querySelector('.shelf');
let albums = shelf.getElementsByTagName('DIV');
let textblocks = document.querySelector('.textblock-wrapper');
let iconWrapper = document.querySelector('.listen-icons');
let iconList = iconWrapper.getElementsByTagName('DIV');

// ALBUM AND TEXT FOCUS ON HOVER
function albumFocusText(album) {
  let selectedId = album.id;
  // ALBUM FOCUS
  document.querySelector('.selected-album').classList.toggle('selected-album');
  album.classList.toggle('selected-album');
  // TEXT FOCUS
  document.querySelector('.selected-text').classList.remove('selected-text');
  document.querySelector(`#${selectedId}-text`).classList.add('selected-text');
}

function toggleIconOpacityOff(icon) {
  for (let item of iconList) {
    if (item != icon) item.style.opacity = '0.5';
  }
}

function toggleIconOpacityOn() {
  for (let icon of iconList) {
    icon.style.opacity = '1';
  }
}

// ADD EVENT LISTENERS
function setupHover() {
  for (let album of albums) {
    album.addEventListener('mouseover', () => albumFocusText(album));
  }
}

function setupIcons() {
  for (let icon of iconList) {
    icon.addEventListener('mouseover', () => toggleIconOpacityOff(icon));
    icon.addEventListener('mouseout', () => toggleIconOpacityOn());
  }
}

// INITIALIZE SCRIPTS
setupHover();
setupIcons();
// setupClick();

// UNUSED SCRIPTS
//   ALBUM FOCUS ON HOVER (NO TEXT)
function albumFocus(album) {
  let selectedId = album.id;
  document.querySelector('.selected-album').classList.toggle('selected-album');
  album.classList.toggle('selected-album');
}

// TEXT FOCUS
function pickText(album) {
  let selectedId = album.id;
  document.querySelector('.selected-text').classList.remove('selected-text');
  document.querySelector(`#${selectedId}-text`).classList.add('selected-text');
}

// ADD EVENT LISTENERS
function setupClick() {
  for (let album of albums) {
    album.addEventListener('mouseover', () => albumFocus(album));
  }
  for (let album of albums) {
    album.addEventListener('click', () => pickText(album));
  }
}
