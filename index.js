const categoriesContainer = document.querySelector(".category_list_container");

fetch ("https://kea-alt-del.dk/t7/api/categories/")
.then ((Response) => Response.json())
.then ((data) => showList (data));

function showList(categories) {
    console.log("min data er:", categories);
    const markup = categories
    .map(
        (category) =>
        `
        <div class="Accessories">
        <a href="productlist.html">Accessories</a>
        </div>
        <div class="Apparel"><a href="productlist.html">Apparel</a></div>
        <div class="Footwear"><a href="productlist.html">Footwear</a></div>
        <div class="Free_items"><a href="productlist.html">Free Items</a></div>
        <div class="Personal_care">
          <a href="productlist.html">Personal Care</a>
        </div>
        <div class="Sporting_goods">
          <a href="productlist.html">Sporting Goods</a>
        </div>
        `
    )
   .join("");
   categoriesContainer.innerHTML = markup;  
}