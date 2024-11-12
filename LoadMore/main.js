const productConatiner = document.querySelector(".productContainer");
const loadMoreBtn = document.querySelector(".loadMore");

let currentStep = 0;

async function fetchProductList(getCurrentStep) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${parseInt(
        getCurrentStep === 0 ? 0 : getCurrentStep * 10
      )}`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log(result);
    if (result && result.products && result.products.length > 0) {
      // Loop through each product and call displayProduct for each
      result.products.forEach((product) => displayProduct(product));
    }
   

    if (productConatiner.children.length >= 100) {
      loadMoreBtn.disabled = true; // Disable the button immediately
      loadMoreBtn.textContent = "No More Products"; // Optional: Update button text
    }
  } catch (error) {
    console.log(error);
  }
}
function displayProduct(productItem) {
  const ProductWrapper = document.createElement("div");
  const ProductTitle = document.createElement("p");
  const ProductDescription = document.createElement("p");
  const ProductImage = document.createElement("img");

  ProductWrapper.classList.add("productWrapper");
  ProductTitle.classList.add("ProductTitle");
  ProductDescription.classList.add("ProductDescription");
  ProductImage.classList.add("productImage");

  ProductWrapper.appendChild(ProductTitle);
  ProductWrapper.appendChild(ProductDescription);
  ProductWrapper.appendChild(ProductImage);
  ProductTitle.textContent = productItem.title;
  ProductDescription.textContent = productItem.description;
  ProductImage.src = productItem.thumbnail;

  productConatiner.appendChild(ProductWrapper);
}

fetchProductList(currentStep);
loadMoreBtn.addEventListener("click", () => {
  fetchProductList((currentStep += 1));
});
