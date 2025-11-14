// script.js
// Functionality for Movie Watchlist & Instagram Reels

document.addEventListener('DOMContentLoaded', function() {
    // Movie add functionality
    const addMovieBtn = document.getElementById('add-movie-btn');
    const movieInput = document.getElementById('movie-input');
    const movieUrlInput = document.getElementById('movie-url-input');
    const watchlist = document.getElementById('watchlist');
    addMovieBtn.addEventListener('click', function() {
        const title = movieInput.value.trim();
        const url = movieUrlInput.value.trim();
        if (title) {
            const li = document.createElement('li');
            if (url) {
                const a = document.createElement('a');
                a.href = url;
                a.textContent = title;
                a.target = '_blank';
                li.appendChild(a);
            } else {
                li.textContent = title;
            }
            // Add delete button
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.className = 'delete-btn';
            delBtn.onclick = function() { li.remove(); };
            li.appendChild(delBtn);
            watchlist.appendChild(li);
            movieInput.value = '';
            movieUrlInput.value = '';
        }
    });

    // Reel add functionality
    const addReelBtn = document.getElementById('add-reel-btn');
    const reelInput = document.getElementById('reel-input');
    const reelsList = document.getElementById('reels-list');
    addReelBtn.addEventListener('click', function() {
        const url = reelInput.value.trim();
        if (url) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = url;
            a.textContent = url;
            a.target = '_blank';
            li.appendChild(a);
            // Add delete button
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.className = 'delete-btn';
            delBtn.onclick = function() { li.remove(); };
            li.appendChild(delBtn);
            reelsList.appendChild(li);
            reelInput.value = '';
        }
    });
});
