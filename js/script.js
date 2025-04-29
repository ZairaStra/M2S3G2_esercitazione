const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((books) => {
      console.log(books);

      books.forEach((book) => {
        const row = document.getElementById("cardsContainer");

        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 col-3xl-1";

        const img = document.createElement("img");
        img.style.width = "100%";
        img.src = book.img;

        const title = document.createElement("h4");
        title.innerText = book.title;

        const price = document.createElement("p");
        price.innerText = book.price + " €";

        const bd = document.createElement("div");

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn");
        btnDelete.classList.add("btn-outline-danger");
        btnDelete.innerText = "Scarta";

        btnDelete.addEventListener("click", function () {
          col.remove();
        });

        const btnSelect = document.createElement("button");
        btnSelect.classList.add("btn");
        btnSelect.classList.add("btn-outline-danger");
        btnSelect.innerText = "Acquista ora";

        const ul = document.querySelector("ul");

        btnSelect.onclick = function (e) {
          e.preventDefault();

          const li = document.createElement("li");
          li.innerText = book.title;
          ul.appendChild(li);
        };

        btnGroup.appendChild(btnSelect);
        btnGroup.appendChild(btnDelete);

        bd.appendChild(title);
        bd.appendChild(price);

        col.appendChild(img);
        col.appendChild(bd);
        col.appendChild(btnGroup);

        row.appendChild(col);
      });
    })
    .catch((error) => {
      console.log("Errore di caricamento", error);
    });
};

window.onload = () => {
  fetchBooks();
};
