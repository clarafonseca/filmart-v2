const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3'
//exercutar a requisição AJAX
function MostraFilmesEmCartaz() {
    &.ajax({
        //Passar a URL ENDPOINT (method: get, default)
        url: TMDB_ENDPOINT_BASE + '/movie/',
        data: {
            api_key: '97fb9e05c6c8ada9e05d5be0994c5389'
        }
    })
    // Receber o JSON
    .done(function (data){
        let codigo_html = '';
        for (i=0; i< xxxxx; i++){
            //Concatenar o código do card com os dados do JSON
            codigo_html += '';
        }
        $('lista_filmes').html(codigo_html)
    });
}

$(document).ready(function(){
    alert('Bem vindo
    ')
    MostraFilmesEmCartaz();
});