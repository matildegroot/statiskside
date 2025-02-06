let productContainer = document.querySelector(".productContainer");
fetch ("https://kea-alt-del.dk/t7/api/products/1163")
.then ((response) => response.json())
.then ((data) => {
    productContainer.innerHTML = `
    <div class="product_content">
        <div class="product_image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Rød ring" class="red_ring" />
        </div>
        <div class="product_info">
          <h1>${data.articletype}</h1>
          <h3>Model name</h3>
          <h4>${data.productdisplayname}</h4>
          <h3>Inventory number</h3>
          <h4>${data.relid}</h4>
          <div class="Strom">${data.brandname}</div>
        </div>
        <div class="purchase_section">
          <div class="gold_ring">${data.variantname}</div>
          <p>${data.articletype}∥${data.gender}</p>
          <label class="underoverskrift">Choose a size</label>
          <select id="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <button class="underoverskrift">Add to basket</button>
        </div>
      </div>`;
});