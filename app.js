// GLOBAL VARIABLES
let shelf = document.querySelector('.shelf');
let albums = shelf.getElementsByTagName('DIV');
let textblocks = document.querySelector('.textblock-wrapper');

// ALBUM AND TEXT FOCUS ON HOVER
function albumFocusText(album) {
  let selectedId = album.id;
  //   ALBUM FOCUS
  document.querySelector('.selected-album').classList.toggle('selected-album');
  album.classList.toggle('selected-album');
  // TEXT FOCUS
  document.querySelector('.selected-text').classList.remove('selected-text');
  document.querySelector(`#${selectedId}-text`).classList.add('selected-text');
}

// ADD EVENT LISTENERS
function setupHover() {
  for (let album of albums) {
    album.addEventListener('mouseover', () => albumFocusText(album));
  }
}

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

// INITIALIZE SCRIPTS
setupHover();
// setupClick();
