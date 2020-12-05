const TMDB_ENDPOINT_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGES_500 = "https://image.tmdb.org/t/p/w500";
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

function EstruturaCard(data) {
    let codigo_html = "";
  
    for (i = 0; i < data.results.length; i++) {
        titulo = data.results[i].title;
        imagem = TMDB_IMAGES_500 + data.results[i].poster_path;
        id = data.results[i].id;
        votos = data.results[i].vote_average
        if (data.results[i].poster_path != null){
            codigo_html += 
            `
            <div class="card" id="${id}">
            <a target="_blank" href="movie.html?id=${id}">
            <img class="card-img" src="${imagem}" alt="${titulo}">
            <div class="txt-film">
            <h4>${titulo}</h4>
            <p>&star; ${votos}</p>
            </div>
            </a>
          </div>
            `
      
            $("#lista_filmes").html(codigo_html);
        }
    }
  }

function pesquisaFilmes() {
    $.ajax({
      url: TMDB_ENDPOINT_BASE + "/search/movie",
      data: {
        api_key: "97fb9e05c6c8ada9e05d5be0994c5389",
        query: query,
    }
    }).done(EstruturaCard);
  }

  $(document).ready(function () {
    pesquisaFilmes();
    $('.pesquisa').html(`Resultados para '${query}'`);
    $('.search-box').submit(function(e){
      let pesquisa = $('.search-text').val();
      window.location.href = `pages/search.html?query=${pesquisa}`;
      e.preventDefault();
    });
  });