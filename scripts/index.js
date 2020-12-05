const TMDB_ENDPOINT_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGES_500 = "https://image.tmdb.org/t/p/w500";
const TMDB_IMAGES_1000 = "https://image.tmdb.org/t/p/original";

function EstruturaSlide(data) {
  let lancamento_active = "";
  let lancamento = "";
  for (i = 1; i < 2; i++) {
    titulo = data.results[i].title;
    imagem = TMDB_IMAGES_1000 + data.results[i].backdrop_path;
    descricao = data.results[i].overview;
    id = data.results[i].id;
    lancamento_active += `
    <div class="carousel-item active slide">
    <!--Mask color-->
    <div class="view">
      <img class="d-block w-100 backdrop_img" src="${imagem}"
        alt="Second slide">
      <div class="mask"></div>
    </div>
  
    <div class="carousel-caption">
    <div class="txt">
      <h4 class="h4-responsive now">LANÇAMENTOS</h4>
      <h3 class="h1-responsive titulo">${titulo}</h3>
      <p class="descricao">${descricao}</p>
      <button class="btn-info">
      <a target="_blank" href="pages/movie.html?id=${id}">&plus; Mais informações</a></button>
      </div>
    </div>
  </div> 
    `;
  }
  for (i = 2; i < 4; i++) {
    titulo = data.results[i].title;
    imagem = TMDB_IMAGES_1000 + data.results[i].backdrop_path;
    descricao = data.results[i].overview;
    id = data.results[i].id;
    lancamento += `
    <div class="carousel-item slide">
    <!--Mask color-->
    <div class="view">
      <img class="d-block w-100 backdrop_img" src="${imagem}"
        alt="Second slide">
      <div class="mask"></div>
    </div>
  
    <div class="carousel-caption">
    <div class="txt">
      <h4 class="h4-responsive now">LANÇAMENTOS</h4>
      <h3 class="h3-responsive titulo">${titulo}</h3>
      <p class="descricao">${descricao}</p>
      <button class="btn-info">
      <a target="_blank" href="pages/movie.html?id=${id}">&plus; Mais informações</a></button>
      </div>
    </div>
  </div>   
    `;
  }
  $("#lancamentos_lista").html(lancamento_active + lancamento);
}
function EstruturaCard(data) {
    let codigo_html = "";
  
    for (i = 0; i < data.results.length; i++) {
      titulo = data.results[i].title;
      imagem = TMDB_IMAGES_500 + data.results[i].poster_path;
      id = data.results[i].id;
      votos = data.results[i].vote_average;
  
      if (data.results[i].poster_path != null) {
        codigo_html += `
        <div class="card" id="${id}">
        <a target="_blank" href="pages/movie.html?id=${id}">
        <img class="card-img" src="${imagem}" alt="Card image cap">
        </a>
        <div class="card-info">
        <h6>${titulo}</h6>
        <p>&star; ${votos}</p>
        </div>
      </div>`;
  
        $("#lista-lancamentos").html(codigo_html);
      }
    }
  }

function EstruturaCard2(data) {
    let codigo_html = "";
  
    for (i = 0; i < data.results.length; i++) {
      titulo = data.results[i].title;
      imagem = TMDB_IMAGES_500 + data.results[i].poster_path;
      id = data.results[i].id;
      votos = data.results[i].vote_average;
  
      if (data.results[i].poster_path != null) {
        codigo_html += `
        <div class="card" id="${id}">
        <a target="_blank" href="pages/movie.html?id=${id}">
        <img class="card-img" src="${imagem}" alt="Card image cap">
        </a>
        <div class="card-info">
        <h6>${titulo}</h6>
        <p>&star; ${votos}</p>
        </div>
      </div>`;
  
        $("#lista-popular").html(codigo_html);
      }
    }
  }

function SlideLancamentos() {
  $.ajax({
    //Passar a URL ENDPOINT (method: get, default)
    url: TMDB_ENDPOINT_BASE + "/movie/now_playing",
    data: {
      api_key: "97fb9e05c6c8ada9e05d5be0994c5389",
    },
  }).done(EstruturaSlide, EstruturaCard);
}
function MostraFilmesEmCartaz() {
    $.ajax({
      //Passar a URL ENDPOINT (method: get, default)
      url: TMDB_ENDPOINT_BASE + "/movie/now_playing",
      data: {
        api_key: "97fb9e05c6c8ada9e05d5be0994c5389",
      },
    }).done(EstruturaCard);
  }

function MostraFilmesPopulares() {
    $.ajax({
      //Passar a URL ENDPOINT (method: get, default)
      url: TMDB_ENDPOINT_BASE + "/movie/popular",
      data: {
        api_key: "97fb9e05c6c8ada9e05d5be0994c5389",
      },
    }).done(EstruturaCard2);
  }


$(document).ready(function () {
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll < 100) {
	    $(".header").css("background" , "transparent");
	  }

	  else{
		  $(".header").css("background" , "#1A1919");  	
	  }
  });
  $('.search-box').submit(function(e){
    let pesquisa = $('.search-text').val();
    window.location.href = `/search.html?query=${pesquisa}`;
    e.preventDefault();
  });
  SlideLancamentos();
  MostraFilmesEmCartaz();
  MostraFilmesPopulares();
});
