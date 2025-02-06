let productContainer = document.querySelector(".productContainer");
fetch ("https://kea-alt-del.dk/t7/api/products/1164")
.then ((response) => response.json())
.then ((data) => {
    productContainer.innerHTML = `
    <div class="product_content">
        <div class="product_image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1164.webp" alt="Rød ring" class="red_ring" />
        </div>
        <div class="product_info">
          <h1>${data.articletype}</h1>
          <h3>Model name</h3>
          <h4>Gold ring with red heart</h4>
          <h3>Inventory number</h3>
          <h4>1163</h4>
          <div class="Strom">STRØM</div>
        </div>
        <div class="purchase_section">
          <div class="gold_ring">Gold Ring with red heart from STRØM</div>
          <p>Accessories∥Women</p>
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