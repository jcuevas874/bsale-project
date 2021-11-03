import { headerComponent } from "./components/header.js";
import { mainComponent } from "./components/main.js";
import { footerComponent } from "./components/footer.js";
import { fetchData } from "./scripts/fetchData.js";

await headerComponent();
await mainComponent(await fetchData(`/products`));
await footerComponent();
