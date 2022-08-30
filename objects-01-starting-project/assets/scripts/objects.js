const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  //listing movie (it will take movie info from object and print in text)
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  // filtering movie
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  // shows us movie list when movie will add or filter
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");

      const { info } = movie; // object destructuring
      const {title :movieTitle} = info
      console.log("this value from object destructuring",movieTitle);
      // let text = movie.info.title + " - ";
      // const {getFormattedTitle} : movie; //Object Destructuring
      let text = movie.getFormattedTitle() + " - ";

    for (const key in info) {
      if (key !== "title") {
        text = text + `${key} : ${info[key]}`;
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
} ;
const addMovieHandler = () => {
  // adding movie in object
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
    getFormattedTitle : function(){
      return this.info.title.toUpperCase()
    }
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
