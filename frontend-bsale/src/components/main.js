import { cardsComponent } from "./cards.js";

export const mainComponent = async (products) => {
  const containerMain = document.querySelector("#main");
  containerMain.innerHTML = "";
  containerMain.appendChild(await cardsComponent(products));
  return containerMain;
};
