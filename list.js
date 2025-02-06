console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productList");

fetch ("https://kea-alt-del.dk/t7/api/products?limit=10")
.then ((response) => response.json())
.then (showProductList);

function showProductList(data){
    const markup = data
    .map(
        (product) =>
            `
        <h2 class="overskrift">Accessories</h2>
      <div class="product_list_container">
        <div>
          <img src="IMG/IMG_0902.webp" alt="billede1" class="product1" />
          <h3>Red Ring</h3>
          <p>Accessories∥Women</p>
          <h4>Prev. DKK 1200,-</h4>
          <h4>Now DKK 1000,-</h4>
          <h5><a href="product.html">Read more</a></h5>
        </div>
        <div>
          <h3 class="udsolgt">Sold out</h3>
          <img src="IMG/IMG_0906.webp" alt="billede2" class="product2" />
          <h3>Gold Necklace</h3>
          <p>Accessories∥Women</p>
          <h4>DKK 700,-</h4>
          <h5><a href="product.html">Read more</a></h5>
        </div>
        <div>
          <img src="IMG/IMG_0904.webp" alt="billede3" class="product3" />
          <h3>String Necklace</h3>
          <p>Accessories∥Women</p>
          <h4>Prev. DKK 400,-</h4>
          <h4>Now DKK 200,-</h4>
          <h5><a href="product.html">Read more</a></h5>
        </div>
        <div>
          <h3 class="udsolgt">Sold out</h3>
          <img src="IMG/IMG_0909.webp" alt="billede4" class="product4" />
          <h3>Gold Bangle</h3>
          <p>Accessories∥Women</p>
          <h4>DKK 1300,-</h4>
          <h5><a href="product.html">Read more</a></h5>
        </div>
      </div>
      `
    )
    .join("");

    if (listContainer){
        listContainer.innerHTML = markup;
    }
}