const $containerCategories = document.querySelector("#container-categories");
const $containerLinks = document.querySelector("#container-links");

const readDBFromHeader = (nameDB) => {
  return fetch(`../database/${nameDB}.json`)
    .then((res) => res.json())
    .then((data) => data);
};

// PAINT CATEGORIES
readDBFromHeader("categories")
  .then((categories) => {
    categories.forEach(({ name, id }) => {
      const estructureCategoryItem = `
    <li><a class="dropdown-item" href="products.html?category=${id}">${name}</a></li>
    `;
      $containerCategories.innerHTML += estructureCategoryItem;
    });
  })
  .catch((error) => console.error(error));

// LINKS HEADER
readDBFromHeader("views").then((links) => {
  links.forEach(({ headerItem, headerActive, filename }) => {
    const structureLinkItem = `
    <li class="nav-item">
    <a class="nav-link" aria-current="page" href="${filename}">${headerItem}</a>
  </li>
    `;

    if (headerActive) {
      $containerLinks.innerHTML += structureLinkItem;
    }
  });
});