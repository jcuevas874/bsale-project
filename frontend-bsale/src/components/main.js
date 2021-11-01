import { cardsComponent } from "./cards.js";

export const mainComponent = async (categoryName, sortBy) => {
  const containerMain = document.querySelector("#main");
  containerMain.innerHTML = "";
  containerMain.appendChild(await cardsComponent(categoryName, sortBy));
  return containerMain;
};
