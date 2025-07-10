const iconCarrito = document.getElementById("iconCarrito");
const carritoInfo = document.getElementById("carritoInfo");

iconCarrito.addEventListener("click", () => {
    if (carritoInfo.style.display == "none"){
      carritoInfo.style.display = "block";
      
    } else {
      
      carritoInfo.style.display = "none";
    }
});