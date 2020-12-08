function EstruturaNavbar() {
  let codigo_html = `
                <div class="logo"><a href="../index.html">FILMART</a></div>
                <form class="search-box">
                    <input type="text" class="search-text" placeholder="Search..." />
                    <button type="submit" class="search-btn">&#9906;</button>
                </form>
                `;

  $("#header").html(codigo_html);
  
  $(".search-box").submit(function (e) {
    let pesquisa = $(".search-text").val();
    window.location.href = `search.html?query=${pesquisa}`;
    e.preventDefault();
  });
}

$(document).ready(EstruturaNavbar);