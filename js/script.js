import config from '../data-minifed.json' with { type: 'json' };

// Get the first 20 products
const first20 = config.products.slice(0, 20);

// Find the container
const list = document.querySelector("#products");

// Builds a card element for a product and returns it
function createProductCard(product) {
    const productCard = document.createElement("article");
    
    const image = document.createElement("img");
    image.src = product.thumbnail;
    image.alt = product.title;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    const button = document.createElement("button");
    button.textContent = "Add to cart";

    productCard.dataset.id = product.id;

    productCard.appendChild(image);
    productCard.appendChild(title);
    productCard.appendChild(price);
    productCard.appendChild(button);

    return productCard;
}

// Create a product card for each product and append it to the list
function displayProducts(products) {
    for (let product of products) {
        const card = createProductCard(product);
        list.appendChild(card);
    }
}
displayProducts(first20);

// Handle click events on the list
list.addEventListener("click", (event) => {
    const id = event.target.parentElement.dataset.id;

    if (event.target.nodeName === "IMG") {
        alert("Product ID: " + id);
    } else if (event.target.nodeName === "BUTTON") {
        const product = first20.find(p => p.id == id);

        alert("Product ID: " + id + " - " + product.title);
    }
});