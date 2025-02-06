const categoriesContainer = document.querySelector(".category_list_container");

fetch ("https://kea-alt-del.dk/t7/api/categories/")
.then ((Response) => Response.json())
.then ((data) => showCategori (data));

function showCategori(categories) {
    console.log("min data er:", categories);
    const markup = categories
    .map(
        (mycategory) =>
        `
        <div class="category_box">
        <a href="productlist.html?category=${mycategory.category}">${mycategory.category}</a>
        </div>
        `
    )
   .join("");
   categoriesContainer.innerHTML = markup;  
}