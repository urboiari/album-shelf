let shelf = document.querySelector('.shelf');
let albums = shelf.getElementsByTagName('DIV');
let textblocks = document.querySelector('.textblock-wrapper');

function albumFocus(album) {
  let selectedId = album.id;
  document.querySelector('.selected-album').classList.toggle('selected-album');
  album.classList.toggle('selected-album');

  document.querySelector('.selected-text').classList.remove('selected-text');
  document.querySelector(`#${selectedId}-text`).classList.add('selected-text');
}

function setupHover() {
  for (let album of albums) {
    album.addEventListener('mouseover', () => albumFocus(album));
  }
}

setupHover();
