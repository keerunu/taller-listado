const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor");
const item = document.getElementById("item");

var array = [];

btnAgregar.addEventListener("click", agregarItem);
btnLimpiar.addEventListener("click", limpiarArray);

function agregarItem() {
    if(item.value != "") {
        array.push(item.value);
        localStorage.setItem("array", JSON.stringify(array));
        refrescarLista();
        item.value = "";
    }
}

function refrescarLista() {
    contenedor.innerHTML = array.map(item => `<li class="list-group-item">${item}</li>`).join('');
}

function limpiarArray() {
    localStorage.removeItem("array");
    array = [];
    contenedor.innerHTML = "";
}

array = JSON.parse(localStorage.getItem("array")) || [];

refrescarLista();