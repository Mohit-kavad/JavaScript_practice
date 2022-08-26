const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];
 
const renderMovies = (filter = "") => {  //listing movie (it will take movie info from object and print in text)
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  // movieList.innerHTML = "";
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key} : ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const cleanInputs = () => {
  const userInputs = document.querySelectorAll("input");
  for (const clrInput of userInputs) {
    clrInput.value = "";
  }
};
const addMovieHandler = () => { // adding movie in object
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return alert("plese fill all information");
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
  cleanInputs();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
