console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productlistcontainer");

fetch ("https://kea-alt-del.dk/t7/api/products?limit=10")
.then ((response) => response.json())
.then (showProductList);

function showProductList(data){
    console.log ("Her kommer mine data", data)
    const markup = data
    .map(
        (product) =>
            `<article class="product_list_container">
                <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="billede1" class="product1" />
                <h3>${product.productdisplayname}</h3>
                <p>${product.category}∥${product.gender}</p>
                <h4>Prev. DKK 1200,-</h4>
                <h4>Now DKK ${product.price},-</h4>
                <h5><a href="product.html">Read more</a></h5>
                </div>
            </article>`
    ).join("");
    console.log ("Min markup er", markup)

    if (listContainer){
        listContainer.innerHTML = markup;
    }
}