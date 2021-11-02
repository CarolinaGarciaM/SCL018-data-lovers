/*IMPORTACIÓN DE MÓDULOS*/
import data from "./data/ghibli/ghibli.js";
import {sortData} from "./data.js";
import {filterData} from "./data.js";

/*SLIDER*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/*ESTABLECIMIENTO DE VARIABLES*/
const films = data.films; 
// variable que contienen las películas de la data.
const printedMovies = document.getElementById("posterFilms"); 
// variable que contiene la section en html.
let newFilms = [...films];
// variable que contiene una copia de las películas de la data.

/*CONFIGURACIÓN DE LAS TARJETAS QUE SE MOSTRARÁN EN EL HTML*/
const drawCard = (films) => {
  return `
     <section class="movieCard">
     <div class="flip-card">
     <div class="flip-card-inner">
       <div class="flip-card-front">
        <img class= "moviePoster" alt="Poster de la película" id="poster" src="${films.poster}">
        <figcaption class="movieName">${films.title}</figcaption>
        <figcaption class="movieYear">(${films.release_date})</figcaption>
        <figcaption class="movieScore">${films.rt_score}</figcaption>
        </div>
        <div class="flip-card-back"
        <h3> ${films.description}<h3>
        </div>
        </div>
      </div>
     </section>`;
};

// FUNCIÓN QUE IMPRIME LAS TARJETAS CON LAS PELÍCULAS
    const displayMovies = (filmsSelected) => {
     printedMovies.innerHTML ="";
     filmsSelected.forEach((newFilms) => {
        printedMovies.innerHTML += drawCard(newFilms);
     })
     
    }
    displayMovies(newFilms);

/* FUNCIÓN QUE IMPRIME CARTAS CON UN CICLO FOR
for (let i = 0; i < films.length; i++) {
  printMovie.innerHTML += drawCard(films[i]);
} */

// INSTRUCCIONES PARA IMPRIMIR CARTAS ORDENADAS
const orderSelected = document.querySelector(".combo-box-order");

orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(data, event.target.value, event.target.value);
  const print = (newFilms) => {
    displayMovies(newFilms);
  }
  
  print(chosenOrder);
});

// INSTRUCCIONES PARA IMPRIMIR CARTAS FILTRADAS
const filterSelected = document.querySelector(".combo-box-filter");

filterSelected.addEventListener("change", (event) => {
const chosenFilter = filterData(data, event.target.value);
const print = (newFilms) => {
  displayMovies(newFilms);
  }

   print(chosenFilter);
});

/* data.films.forEach(function(e){
  const females = e.people.filter( (element) =>
  element.gender === "Female");
  console.log(females);
}); */

