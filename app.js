const TMDB_ENDPOINT_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGES_500 = "https://image.tmdb.org/t/p/w500";
const TMDB_IMAGES_1000 = "https://image.tmdb.org/t/p/original";

function EstruturaCard(data) {
  let codigo_html = "";

  for (i = 0; i < data.results.length; i++) {
    titulo = data.results[i].title;
    imagem = TMDB_IMAGES_500 + data.results[i].poster_path;
    estreia = data.results[i].release_date;

    if (data.results[i].poster_path != null) {
      codigo_html += `<div class="card">
      <img src="${imagem}" alt="${titulo}" class="card-img">
      <div class="card-body">
          <h4 class="card-title">${titulo}</h5>
          <p class="card-text">
              ${estreia}
          </p>
          <a href="#" class="card-btn">Mais info</a>
      </div>
</div>`;

      $("#lista_filmes").html(codigo_html);
    }
  }
}
//exercutar a requisição AJAX
function MostraFilmesEmCartaz() {
  $.ajax({
    //Passar a URL ENDPOINT (method: get, default)
    url: TMDB_ENDPOINT_BASE + "/movie/popular",
    data: {
      api_key: "97fb9e05c6c8ada9e05d5be0994c5389",
    },
  }).done(EstruturaCard);
}

function pesquisaFilmes() {
  valorPesquisado = search.value;
  payload = {
    api_key: "97fb9e05c6c8ada9e05d5be0994c5389",
    query: valorPesquisado,
  };
  $.ajax({
    //Passar a URL ENDPOINT (method: get, default)
    url: TMDB_ENDPOINT_BASE + "/search/movie",
    data: payload,
  }).done(EstruturaCard);
}

$(document).ready(function () {
  MostraFilmesEmCartaz();
  $("#btn_pesquisar").click(pesquisaFilmes);
});
