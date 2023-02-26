const $containerCategories = document.querySelector("#container-categories");
const $containerProducts = document.querySelector("#container-sales");

/* const readDB = (nameDB) => {
  return new Promise((resolve, reject) => {
    if (!nameDB) reject("Debe ingresar un nombre de base de datos");
    fetch(`../database/${nameDB}.json`)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
}; */

const readDB = (nameDB) => {
  return fetch(`../database/${nameDB}.json`)
    .then((res) => res.json())
    .then((data) => data);
};

const ellipsis = (text) =>
  text.length > 50 ? text.substring(0, 50) + "..." : text;

// PAINT CATEGORIES
readDB("categories")
  .then((categories) => {
    categories.forEach(({ name, id }) => {
      const estructureCategoryItem = `
<li><a class="dropdown-item" href="#">${name}</a></li>
`;
      $containerCategories.innerHTML += estructureCategoryItem;
    });
  })
  .catch((error) => console.error(error));

// PAINT PRODUCTS
readDB("products").then((products) => {
  products
    .filter(({ discount }) => discount > 20)
    .forEach(({ image, price, discount, title }) => {
      const priceWithDiscount = price - (price * discount) / 100;
      const estructureProductItem = `
    <div class="card" style="width: 18rem;height:min-content;">
    <img src="${image}" class="card-img-top" style="height:200px;object-fit:contain" alt="${title}">
    <div class="card-body">
      <h5 class="card-title">$${priceWithDiscount.toFixed(
        2
      )} <span class="badge ">${discount}% Off</span></h5>
      <p class="card-text">${ellipsis(title)}</p>
      <a href="#" class="btn btn-primary">Comprar ahora</a>
    </div>
    </div>
    `;
      $containerProducts.innerHTML += estructureProductItem;
    });
});
