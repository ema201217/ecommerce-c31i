const $containerCarousel = document.querySelector("#container-carousel");
const $containerProducts = document.querySelector("#container-sales");

const readDBFromIndex = (nameDB) => {
  return fetch(`../database/${nameDB}.json`)
    .then((res) => res.json())
    .then((data) => data);
};

const ellipsis = (text) =>
  text.length > 65 ? text.substring(0, 65) + "..." : text;

// IMAGES CAROUSEL

readDBFromIndex("carousel")
  .then((images) => {
    images.forEach(({ filename, url, backgroundColor }, index) => {
      const carouselItem = `
      <div class="carousel-item ${index === 0 ? "active" : null} h-100">
    <img src="${
      url ? url : `/assets/imagenes/carrusel/${filename}`
    }" class="d-block w-100 h-100" alt="..." style="object-fit:contain;background-color:${backgroundColor}">
    </div>
    `;
      $containerCarousel.innerHTML += carouselItem;
    });
  })
  .catch((error) => console.error(error));

// PAINT PRODUCTS
readDBFromIndex("products")
  .then((products) => {
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
      <div class="text-end">
         <a href="#" class="btn btn-primary">Ver más</a>
      </div>
    </div>
    </div>
    `;
        $containerProducts.innerHTML += estructureProductItem;
      });
  })
  .catch((error) => console.error(error));
