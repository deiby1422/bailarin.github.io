function filterProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let productos = document.getElementsByClassName("producto");

    for (let i = 0; i < productos.length; i++) {
        let name = productos[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
        if (name.includes(input)) {
            productos[i].style.display = "";
        } else {
            productos[i].style.display = "none";
        }
    }
}
