import { fetchData } from "../scripts/fetchData.js";
import { mainComponent } from "./main.js";

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const headerComponent = async () => {
  const containerHeader = document.querySelector(".containerHeader");
  const categories = await fetchData("/categories");
  let categoryOptions = "";
  categories.forEach((category) => {
    const { id, name } = category;
    categoryOptions += `<option value="${id}">${capitalize(name)}</option>`;
  });

  const headerTemplate = `
      <header>
      <a href="/" style="text-decoration:none">
      <nav class="navbar navbar-expand-lg navbar-light bg-wine px-5 py-5 d-flex justify-content-center">
      <svg id="svg2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="150" width="150" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 376.77064 767.21384">
      <g id="layer1" transform="translate(-165.55 -53.201)">
      <path id="path4157" d="m230.82 53.201s-34.135 65.377-45.074 100.39c-10.874 34.807-18.407 71.132-19.975 107.56-1.0549 24.508 1.5489 49.359 7.1692 73.238 4.6057 19.568 11.407 38.964 21.514 56.341 9.4524 16.25 35.853 43.541 35.853 43.541s-25.822-64.103-32.268-97.83c-5.4263-28.39-5.9496-57.671-5.1237-86.563 0.67289-23.539 4.1312-46.971 8.1952-70.166 7.4757-42.667 29.71-126.51 29.71-126.51zm246.56 2.6309s12.834 45.279 18.824 68.035c5.5716 21.164 12.497 42.085 15.924 63.701 4.3547 27.47 8.494 55.554 5.788 83.235-3.2343 33.086-7.8737 66.75-23.159 96.271-15.837 30.588-40.978 55.615-70.213 73.829-17.049 10.622-31.028 17.498-48.494 21.712-8.0054 1.9314-18.897 4.9322-24.612 10.861-19.616 20.351-11.005 50.564-7.2361 80.34 5.1073 40.351 8.5003 81.732 19.542 120.88 6.3647 22.564 15.529 45.73 29.677 64.424 8.4822 11.208 31.124 26.776 31.124 26.776s-20.411-34.461-28.23-52.835c-7.6478-17.973-12.671-36.612-16.647-55.736-4.0957-19.697-5.839-40.007-7.2416-60.077-2.3234-33.246-4.341-99.889-4.341-99.889s26.756-11.613 39.812-18.094c15.471-7.6798 31.586-14.51 45.6-24.606 17.451-12.571 33.698-27.29 47.047-44.153 12.612-15.932 23.571-33.704 30.4-52.842 7.478-20.958 9.5534-43.651 10.859-65.865 1.233-20.977 0.1872-42.192-2.894-62.977-5.0369-33.978-13.427-67.663-25.336-99.882-9.42-25.52-36.18-73.118-36.18-73.118zm-202.13 696.05c-4.3477 0.04-8.4859 0.17624-11.786 0.48014-15.394 1.4178-31.003 3.4795-45.561 8.682-8.0753 2.8859-16.423 6.3442-22.599 12.293-3.2308 3.1116-6.9252 7.0843-6.8667 11.569 0.0501 3.8452 3.2668 7.2148 6.1432 9.7672 5.7867 5.1351 13.661 7.4149 20.975 9.9383 16.059 5.5411 32.914 8.711 49.718 11.214 24.984 3.7219 48.769 4.3308 74.027 4.5712 13.157 0.12535 27.827-0.28478 40.957-1.1379 27.379-1.7786 54.944-2.0861 82.078-6.1498 11.61-1.7388 23.414-3.5135 34.353-7.7743 6.2129-2.4199 12.292-5.6016 17.351-9.9448 2.8636-2.4584 5.38-5.4689 7.0508-8.853 0.98999-2.0052 2.0814-4.321 1.6312-6.5115-0.70131-3.412-3.6142-6.129-6.3273-8.3137-7.4548-6.003-16.936-9.1582-26.039-12.115-11.971-3.8888-24.518-6.1328-37.056-7.235-10.387-0.91308-31.281 0.54592-31.281 0.54592s13.545 3.2114 20.251 5.0645c12.018 3.3209 24.15 6.3863 35.793 10.846 4.7835 1.8322 9.652 3.6784 13.924 6.5049 3.3098 2.1899 8.6046 3.998 8.8596 7.9585 0.21956 3.4116-3.765 6.0032-6.689 7.7744-7.0392 4.2639-15.905 4.3974-24.046 5.6038-23.777 3.5233-47.933 3.8899-71.955 4.7027-24.935 0.84374-49.907 0.75544-74.849 0.17755-19.785-0.45836-39.599-1.0231-59.301-2.894-13.27-1.2601-26.619-2.5262-39.589-5.6038-5.1362-1.2188-10.501-2.318-15.009-5.0645-2.2202-1.3526-5.5668-2.8202-5.6038-5.4196-0.0501-3.5368 4.426-5.7016 7.4126-7.5968 9.6391-6.1165 21.381-8.0816 32.36-11.208 9.5055-2.7064 19.215-4.672 28.927-6.5049 10.184-1.9221 30.736-4.7027 30.736-4.7027s-14.943-0.78445-27.986-0.66432z" fill-rule="evenodd"/>
      </g>
      </svg>
      <h1 class="navbar-brand fst-italic text-white" style="font-size: 15rem;">Bsale Test</h1>
      </nav>
      </a>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark px-5 py-3">
      <div class="container-fluid">
      <a href="/" style="text-decoration:none"><h1 class="navbar-brand fst-italic fs-1 text-white">Bsale Test</h1></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      < class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
      <select class="form-select bg-black border border-dark text-white categories" aria-label="Default select example">
      <option value="0" active>Categories</option>
      ${categoryOptions}  
      </select>
      </li>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-up mx-3 text-white-50" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
      </svg>
      <li class="nav-item">
      <select class="form-select bg-black border border-dark text-white sortBy" aria-label="Default select example">
      <option value="" active>Sort by</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
      </select>
      </li>
      </ul>
      <div>
      <form class="form_search d-flex me-2">
      <input class="form-control text-white bg-black border border-dark search-input" type="search" placeholder="Search..." aria-label="Search">
      <button class="navbar-btn btn bg-dark bg-gradient text-white-50" type="submit"><i class="fa fa-search"></i></button>
      </form>
      <span id="errors" class="text-danger"></span>
      </div>
      <button class="navbar-btn bg-dark text-white-50">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      </button>
      </div>
      </div>
      </nav>
      </header>
     `;

  containerHeader.innerHTML = headerTemplate;
  const selectCategories = containerHeader.querySelector(".categories");
  const sortBy = containerHeader.querySelector(".sortBy");
  selectCategories.addEventListener("change", async (e) => {
    sortBy.selectedIndex = "";
    const selectedCategoryValue =
      selectCategories.options[selectCategories.selectedIndex].value;
    let productData;
    if (selectedCategoryValue !== "0") {
      productData = await fetchData(`/categories/${selectedCategoryValue}`);
    } else {
      productData = await fetchData(`/products`);
    }
    await mainComponent(productData);
  });

  sortBy.addEventListener("change", async (e) => {
    const selectedCategoryValue =
      selectCategories.options[selectCategories.selectedIndex].value;
    const sortBy = e.target.value;
    let productData;
    if (selectedCategoryValue !== "0") {
      productData = await fetchData(
        `/categories/${selectedCategoryValue}?sort=${sortBy}`
      );
    } else {
      productData = await fetchData(`/products?sort=${sortBy}`);
    }
    await mainComponent(productData);
  });

  const formSearchBox = document.querySelector(".form_search");
  const errorsP = document.querySelector("#errors");
  formSearchBox.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorsP.textContent = undefined;
    const searchValue = e.target[0].value;
    let selectedCategoryValue =
      selectCategories.options[selectCategories.selectedIndex].value;
    const selectedSortValue = sortBy.options[sortBy.selectedIndex].value;
    let productData;
    if (selectedCategoryValue === "0") {
      selectedCategoryValue = undefined;
    }
    if (searchValue.length >= 2) {
      productData = await fetchData(
        `/searchs/${searchValue}/category/${selectedCategoryValue}?sort=${selectedSortValue}`
      );
    } else {
      errorsP.textContent = "La búsqueda requiere mínimo dos letras!";
    }
    await mainComponent(productData);
  });

  return containerHeader;
};
