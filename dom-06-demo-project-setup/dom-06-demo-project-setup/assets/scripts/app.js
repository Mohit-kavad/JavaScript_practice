const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTexSection = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTexSection.style.display = "block";
  } else {
    entryTexSection.style.display = "none";
  }
};

const cancelMovieDeletion = () => {
  togleBackground();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  cancelMovieDeletion();
  updateUI()
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  togleBackground();
  const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

  confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

  // confirmDeletionBtn.removeEventListener('click',deleteMovie.bind(null,movieId));
  cancelDeletionBtn.removeEventListener("click", cancelMovieDeletion);
  cancelDeletionBtn.addEventListener("click", cancelMovieDeletion);
  confirmDeletionBtn.addEventListener("click", deleteMovie.bind(null, movieId));
};

const randerNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
     <img src="${imageUrl}" alt="${title}"> 
    </div>
    <div class="movie-element__info">
     <h2>${title}</h2>
     <p>${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  listRoot.append(newMovieElement);
};

const togleBackground = () => {
  backdrop.classList.toggle("visible");
};

const closeMoveiModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  togleBackground();
};
const clearMovieInput = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};
const cancelAddMovie = () => {
  closeMoveiModal();
  togleBackground();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    parseInt(ratingValue) < 1 ||
    parseInt(ratingValue) > 5
  ) {
    alert("please enter valid values (rating between 1 and 5)");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    url: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMoveiModal();
  togleBackground();
  randerNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.url,
    newMovie.rating
  );
  clearMovieInput();
  updateUI();
};

const backdropClickHandler = () => {
  closeMoveiModal();
  cancelMovieDeletion();
  clearMovieInput();
};

startAddMovieBtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovie);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
