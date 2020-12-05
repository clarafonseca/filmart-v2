const TMDB_ENDPOINT_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGES_500 = "https://image.tmdb.org/t/p/w500";
const TMDB_IMAGES_1000 = "https://image.tmdb.org/t/p/original";
const urlParams = new URLSearchParams(window.location.search);
const idFilme = urlParams.get("id");

function EstruturaMovie(data) {
  let codigo_html = "";
  img_500 = TMDB_IMAGES_500 + data.poster_path;
  img_1000 = TMDB_IMAGES_1000 + data.backdrop_path;
  titulo = data.original_title;
  descricao = data.overview;
  votos = data.vote_average;
  categoria1 = 'Category';
  categoria2 = 'Category';

  if (data.genres[0] != undefined){
    categoria1 = data.genres[0].name;
}  
  if (data.genres[1] != undefined){
      categoria2 = data.genres[1].name;
  }
  document.title = "Filmart - " + titulo;

  if (data.status_code < 200 || data.status_code > 300) {
    $(".filme").html(`<h1 id="msg-alert">Movie not found!</h1>`);
    return;
  }

  codigo_html += `
        <div class="container">
          <div class="poster-film">
            <img class="img-original"src="${img_1000} alt="${titulo}">            
            <img class="img-500"src="${img_500}" alt="${titulo}">
            <div class="mask"></div>
          </div>
          <div class="info-film">
            <h1>${titulo}</h1>
            <ul class="lista-categorias">
              <li>${categoria1}</li>
              <li>${categoria2}</li>
              <li class="votos">${votos}</li>
            </ul>
            <p class="descricao">
            ${descricao}
            </p>
          </div>
        </div>`;

  $(".filme").html(codigo_html);
  if ( votos > 4 && votos < 7){
    $('.votos').css('background-color', '#e6c11f')
  } else  if (votos > 7 && votos <= 10){
    $('.votos').css('background-color', '#20c200')
  }
}

function MostraFilme() {
  $.ajax({
    //Passar a URL ENDPOINT (method: get, default)
    url: TMDB_ENDPOINT_BASE + "/movie/" + idFilme,
    data: {
      api_key: "97fb9e05c6c8ada9e05d5be0994c5389",
    },
  }).done(EstruturaMovie);
}


$(document).ready(function () {
  MostraFilme();
  $(".search-box").submit(function (e) {
    let pesquisa = $(".search-text").val();
    window.location.href = `search.html?query=${pesquisa}`;
    e.preventDefault();
  });
});
