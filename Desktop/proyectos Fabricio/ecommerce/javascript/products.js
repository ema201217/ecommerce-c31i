const estructureProductItem = `
<div class="card" style="width: 18rem;height:min-content;">
<img src="{image}" class="card-img-top" style="height:200px;object-fit:contain" alt="{title}">
<div class="card-body">
  <h5 class="card-title">{priceWithDiscount.toFixed(
    2
  )} <span class="badge ">{discount}% Off</span></h5>
  <p class="card-text">{ellipsis(title)}</p>
  <div class="text-end">
     <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>
</div>
`;