export const cardsComponent = async (products = { results: [] }) => {
  const containerCards = document.createElement("div");
  containerCards.className = "containerCards m-5";
  if (!products.error && products.length > 0) {
    products.forEach((product) => {
      const { name, url_image, price, discount } = product;
      const cardsTemplate = `
             <div class="card" style="width: 18rem;">
             <div class="container_image">
             <img height="210px" src="${
               url_image
                 ? url_image
                 : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
             }" class="card-img-top" alt="${name}">
             ${
               discount !== 0
                 ? `<span class="product-discount-label btn-danger bg-gradient">${discount}%</span>`
                 : ""
             }
             </div>
             <div class="card-body d-flex flex-column justify-content-center">
               <h5 class="card-title text-center">${name}</h5>
               <div class="d-flex flex-row justify-content-center">
               ${
                 discount !== 0
                   ? `<span class="card-text text-center text-secondary" style="text-decoration: line-through;">${price} $ - </span>`
                   : ""
               }
               <span class="card-text text-center">${
                 discount !== 0 ? price - (price * discount) / 100 : price
               } $</span>
               </div>
               <button class="btn bg-dark btn-sm bg-gradient text-white">
               ADD TO CART
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus text-white mx-2" viewBox="0 0 16 16">
             <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
             <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
           </svg></button>
             </div>
           </div>`;
      containerCards.innerHTML += cardsTemplate;
    });
  } else {
    const cardsTemplate = `<div class="d-flex flex-column justify-content-center align-item-center"> 
                              <h1 class="text-center">No hay Productos!!!</h1>                          
                             <a href="/" class="btn btn-outline-secondary refresh">REGRESAR</a>
                          </div>`;
    containerCards.innerHTML += cardsTemplate;
  }

  return containerCards;
};
