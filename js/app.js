document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#new-music-form');
    form.addEventListener('submit', handleNewForm);

    const deleteAllButton = document.querySelector('#delete-button');
    deleteAllButton.addEventListener('click', handleDeleteClick);
});

const handleNewForm = function(event) {
    event.preventDefault();


    const albumList = document.querySelector('#album-list');
    const albumListItem = document.createElement('li');
    albumListItem.classList.add('album-list-item'); //for CSS
    albumList.appendChild(albumListItem);

    const artist = document.createElement('h3');
    artist.textContent = event.target.artist.value;
    albumListItem.appendChild(artist);

    const album = document.createElement('h4');
    album.textContent = event.target.album.value;
    albumListItem.appendChild(album);

    const genre = document.createElement('h5');
    genre.textContent = event.target.genre.value;
    albumListItem.appendChild(genre);

    this.reset();
}

const handleDeleteClick = function (event) {
    const albumList = document.querySelector('#album-list');
    albumList.innerHTML ='';
}