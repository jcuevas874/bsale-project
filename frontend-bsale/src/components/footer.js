export const footerComponent = () => {
  const containerFooter = document.querySelector(".containerFooter");
  const footerTemplate = `
    <footer class="flex-shrink-0 fixed-bottom py-2 bg-dark text-white-50">
        <div class="container text-center">
           <small>Copyright &copy; Bsale Test, 2021</small>
        </div>
    </footer>`;
  containerFooter.innerHTML = footerTemplate;
  return containerFooter;
};
