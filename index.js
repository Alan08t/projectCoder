const $birthdayList = document.querySelector(".birthdayList");
const $date = document.querySelector("#date");
const $name = document.querySelector("#name");
const $send = document.querySelector("#send");
const $searchButton = document.querySelector("#searchButton");
const $searchText = document.querySelector("#searchText");
const $reinitButton = document.querySelector("#reinitButton");
const $delete = document.querySelector("#delete");

//Primero chequeamos que no exista data en el local storage
//En caso de existir se actualiza la pantalla con los datos guardados
if (!localStorage.getItem("dates")) dataObj = [];
else {
  data = localStorage.getItem("dates");
  data = JSON.parse(data);
  dataObj = data;
}



let newDate = {};



//Agrega un nuev objeto al array con los datos ingresados por el usuario
const addDate = () => {
  newDate = {};

  //Validando los datos de entrada
  if ($name.value === "" || $date.value === "") {
    alert("El nombre y la fecha no pueden estar vacios.");

  } else {
    newDate.name = $name.value;
    newDate.date = new Date($date.value);
    newDate.valueSort = $date.valueAsNumber;
    newDate.month = newDate.date.toUTCString().slice(8, 11);
    newDate.day = newDate.date.toUTCString().slice(5, 7)
    //Si todo es correcto se hace push al array con el objeto nuevo
    dataObj.push(newDate);
  }


  //Actualizamos la pantalla y guardamos los datos nuevos en el local storage
  updateView();
  saveData();
};
const switchSign = (sign) => {
  switch (sign) {
    case "Jan":
      newDate.day < 20 ? newDate.sign = 'Capricornio' :newDate.sign =  'Acuario'
      return "#ea5545";
      break;

    case "Feb":
      newDate.day < 19 ? newDate.sign = 'Acuario' :newDate.sign =  'Piscis'
      return '#f46a9b'
      break;

    case "Mar":
      newDate.day < 21 ? newDate.sign = 'Piscis' :newDate.sign =  'Aries'
      return '#ef9b20'
      break;

    case "Apr":
      newDate.day < 20 ? newDate.sign = 'Aries' :newDate.sign =  'Tauro'
      return '#edbf33'
      break;

    case "May":
      newDate.day < 21 ? newDate.sign = 'Tauro' :newDate.sign =  'Géminis'
      return "#ede15b"
      break;

    case "Jun":
      newDate.day < 21 ? newDate.sign = 'Géminis' :newDate.sign =  'Cáncer'
      return "#bdcf32"
      break;

    case "Jul":
      newDate.day < 23 ? newDate.sign = 'Cáncer' :newDate.sign =  'Leo'
      return "#87bc45"
      break;

    case "Aug":
      newDate.day < 23 ? newDate.sign = 'Leo' :newDate.sign =  'Virgo'
      return "#27aeef"
      break;

    case "Sep":
      newDate.day < 23 ? newDate.sign = 'Virgo' : newDate.sign = 'Libra'
      return "#b33dc6"
      break;

    case "Oct":
      newDate.day < 23 ? newDate.sign = 'Libra' :newDate.sign =  'Escorpio'
      return "#b33dc6"
      break;

    case "Nov":
      newDate.day < 22 ? newDate.sign = 'Escorpio' :newDate.sign =  'Sagitario'
      return "#dc0ab4"
      break;

    case "Dec":
      newDate.day < 22 ? newDate.sign = 'Sagitario' :newDate.sign =  'Capricornio'
      return "#0bb4ff"
      break;
  }
};
//Actualiza la vista borrando los datos viejos y renderizando los nuevos
const updateView = () => {
  //Vaciamos la lista que contiene los items
  $birthdayList.innerHTML = null;
  //Y para cada elemento del array agregamos un nuevo item
  dataObj.forEach((element, index) => {
    date = new Date(element.date);

    $birthdayList.innerHTML += `
    <li class="listItem container">
    <p class='spanContainer container'>
      <span class='nameAndDateSpan'>
      <span class="listItemSpan">${element.name}</span>
      <span class="listItemSpan">${getEdad(date).toString()}</span>
      <span class="listItemSpan signSpan" style='color:${switchSign(element.month)}'>${
      element.sign
    }</span>
      </span>
      <span class="listItemSpan birthdaySpan">${date
        .toUTCString()
        .slice(5, 11)}</span>
    </p>
    <div class='itemDiv container'>
      <span id='${index}' ' class='deleteItem'>X</span>
    </div>
      </li>
    `;
  });
};

updateView();

//Obtenemos la edad en cantidad de anios
function getEdad(dateString) {
  const today = new Date();
  let edad = today.getFullYear() - dateString.getFullYear();
  let diferenciaMeses = today.getMonth() - dateString.getMonth();
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && today.getDate() < dateString.getDate())
  ) {
    edad--;
  }
  return edad;
}

//Guardamos los datos nuevos en un string en el local storage
const saveData = () => {
  dataObjString = JSON.stringify(dataObj);
  localStorage.setItem("dates", dataObjString);
};
$send.addEventListener("click", () => {
  addDate();
});

const search = () => {
  if ($searchText.value == "") return null;
  else {
    let data = $searchText.value;
    let newArray = dataObj.filter((element) => element.name == data);

    dataObj = newArray;
    updateView();
  }
};

const reinit = () => {
  $searchText.value = "";
  if (localStorage.getItem("dates")) {
    data = localStorage.getItem("dates");
    data = JSON.parse(data);
    dataObj = data;
  } else dataObj = [];
  updateView();
};

const deleteAll = () => {
  confirm("¿Estas seguro? Esto borrara todos los datos")
    ? localStorage.removeItem("dates")
    : null;

  reinit();
};

const $deleteItem = document.querySelectorAll(".deleteItem");

const deleteItem = (e) => {
  if (confirm("¿Quieres elimiar esta fecha?")) {
    let index = e.target.id;
    e.stopPropagation();
    dataObj.splice(index, index + 1);
    saveData();
    location.reload();
  } else null;
};

$searchButton.addEventListener("click", search);
$reinitButton.addEventListener("click", reinit);
$delete.addEventListener("click", deleteAll);
$deleteItem.forEach(function (item) {
  item.addEventListener("click", deleteItem);
});
$reinitButton.addEventListener("click", reinit);
