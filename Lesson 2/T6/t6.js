'use strict';

const movies = [];

let more = true;
while (more) {
  const title = prompt('Syötä elokuvan nimi');
  const rating = prompt('Syötä arvio (1-5)');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('Haluatko syöttää lisää?');
}

function sortMovies(a, b) {
  const vertailu = b.rating - a.rating;
  return vertailu;
}
movies.sort(sortMovies);

console.log(movies);

const tbody = document.getElementById('kohde');

for (const movie of movies) {
  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.innerText = movie.title;
  tr.appendChild(td1);

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;
  tr.appendChild(td2);

  tbody.appendChild(tr);
}

const favourite = movies[0];
document.getElementById('fav').innerText = favourite.title;
