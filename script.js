const boton = document.getElementById("btn_iniciar");

boton.addEventListener("click", function () {
  if (boton.textContent === "Iniciar Sesion") {
    boton.textContent = "Cerrar sesión";
    boton.classList.add("cerrar"); // cambia color
  } else {
    boton.textContent = "Iniciar Sesion";
    boton.classList.remove("cerrar"); // vuelve al original
  }
});

let contador1 = 0;
let btn_like1 = document.getElementById("btn_like1");
let btnAlerta1 = document.getElementById("btn_like1");

btn_like1.addEventListener("click", function () {
  contador1++;
  btn_like1.textContent = contador1 + " Me gusta";
});
btnAlerta1.addEventListener("click", function () {
  alert("Gato Atigrado was like");
});

let contador2 = 0;
let btn_like2 = document.getElementById("btn_like2");
let btnAlerta2 = document.getElementById("btn_like2");

btn_like2.addEventListener("click", function () {
  contador2++;
  btn_like2.textContent = contador2 + " Me gusta";
});
btnAlerta2.addEventListener("click", function () {
  alert("Golden Retriever was like");
});

let btn_definicion = document.getElementById("btn_definicion");

btn_definicion.addEventListener("click", function () {
  btn_definicion.style.display = "none";
});
