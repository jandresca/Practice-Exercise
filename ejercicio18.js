let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let i = 0;

const fn1 = () => {
  if (i < 6) {
    ++i;
    nombre = prompt("ingresa el nombre y apellido de esta persona");
    nombre1 = nombre.toLowerCase();
    if (nombre1 == "cristhian atehortua") {
      alert("Perfecto adivinaste a la persona");
      console.log(teclado.innerHTML);
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("Lo siento se acabaron los intentos");
  }
};

const fn2 = () => {
  if (i < 6) {
    ++i;
    nombre = prompt("ingresa el nombre y apellido de esta persona");
    nombre1 = nombre.toLowerCase();
    if (nombre1 == "daniela apraez") {
      alert("Perfecto adivinaste a la persona");
      console.log(teclado.innerHTML);
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("Lo siento se acabaron los intentos");
  }
};

const fn3 = () => {
  if (i < 6) {
    ++i;
    nombre = prompt("ingresa el nombre y apellido de esta persona");
    nombre1 = nombre.toLowerCase();
    if (nombre1 === "jaime castro") {
      alert("Perfecto adivinaste a la persona");
      console.log(teclado.innerHTML);
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("Lo siento se acabaron los intentos");
  }
};

const fn4 = () => {
  if (i < 6) {
    ++i;
    nombre = prompt("ingresa el nombre y apellido de esta persona");
    nombre1 = nombre.toLowerCase();
    if (nombre1 === "juan daza") {
      alert("Perfecto adivinaste a la persona");
      console.log(teclado.innerHTML);
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("Lo siento se acabaron los intentos");
  }
};

const fn5 = () => {
  if (i < 6) {
    ++i;
    nombre = prompt("ingresa el nombre y apellido de esta persona");
    nombre1 = nombre.toLowerCase();
    if (nombre1 === "manuel restrepo") {
      alert("Perfecto adivinaste a la persona");
      console.log(teclado.innerHTML);
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("Se acabaron los intentos");
  }
};

const fn6 = () => {
  if (i < 6) {
    ++i;
    nombre = prompt("ingresa el nombre y apellido de esta persona");
    nombre1 = nombre.toLowerCase();
    if (nombre1 === "mario loaiza") {
      alert("Perfecto adivinaste a la persona");
      console.log(teclado.innerHTML);
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("Lo siento se acabaron los intentos");
  }
};

btn1.onclick = function () {
  fn1();
};

btn2.onclick = function () {
  fn2();
};

btn3.onclick = function () {
  fn3();
};

btn4.onclick = function () {
  fn4();
};

btn5.onclick = function () {
  fn5();
};

btn6.onclick = function () {
  fn6();
};
