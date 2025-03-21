(async function () {
    const request = await fetch("http://localhost:3000/movies");
    const movies = await request.json();

    movies.forEach((movie) => {
        const article = document.createElement("ARTICLE");
        article.classList.add("movie");
        article.dataset.id = movie.id;
        const h2 = document.createElement("H2");
        h2.classList.add("movie__h2");
        h2.textContent = movie.title;
        const img = document.createElement("IMG");
        img.classList.add("movie__img");
        img.src = movie.poster;
        img.alt = movie.title;
        const p = document.createElement("P");
        p.classList.add("movie__year");
        p.textContent = movie.year;
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(p);
        const frgm = document.createDocumentFragment();
        frgm.appendChild(article);
        document.body.appendChild(frgm);
    });
})();
