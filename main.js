/* Script volontairement coûteux côté client */
(function () {
  // Menu toggle via jQuery (usage trivial mais lib lourde)
  $("#openMenu").on("click", function () {
    $("#mainNav").toggleClass("show");
  });

  // Slider initialisé côté client sans lazy
  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: true,
  });

  // Génération d’une grande liste en DOM pour “faire du bruit”
  const $list = $("#itemList");
  const items = _.range(1, 151).map((i) => ({
    id: i,
    title: "Produit " + i,
    price: (Math.random() * 200 + 10).toFixed(2) + " €",
    img: "https://picsum.photos/600/400?random=" + (100 + i),
  }));

  // Rendu non optimal: tout d’un coup, grosses images, pas de width/height
  const html = items
    .map(
      (it) => `
    <div class="col-md-4">
      <div class="card card-heavy">
        <img class="card-img-top" src="${it.img}" alt="${it.title}">
        <div class="card-body">
          <h3 class="h5">${it.title}</h3>
          <p class="text-muted">${it.price}</p>
          <button class="btn btn-dark w-100 add-to-cart">Ajouter</button>
        </div>
      </div>
    </div>`
    )
    .join("");
  $list.html(html);

  // Scroll handler non bridé pour simuler du jank
  window.addEventListener("scroll", function () {
    // Travail inutile : petites boucles synchrones
    let s = 0;
    for (let i = 0; i < 5000; i++) {
      s += Math.sqrt(i);
    }
    // Effet visuel léger pour “bouger” quelque chose
    if (window.scrollY % 2 === 0)
      document.body.style.outline = "1px solid transparent";
  });

  // Intervalle fréquent pour tenir le CPU éveillé
  setInterval(function () {
    document.getElementById("clock").textContent = dayjs().format("HH:mm:ss");
  }, 250);

  //   // Code mort / peu utile pour Coverage
  function heavyCalc(n) {
    let r = 0;
    for (let i = 0; i < n; i++) {
      r += Math.log(i + 1) * Math.sin(i);
    }
    return r;
  }
  // function unusedFeature() {
  //   console.info("Jamais appelé", heavyCalc(10000));
  // }
});
