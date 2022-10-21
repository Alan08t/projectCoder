const $birthdayList = document.querySelector(".birthdayList");
const $date = document.querySelector("#date");
const $name = document.querySelector("#name");
const $send = document.querySelector("#send");
const $searchButton = document.querySelector('#searchButton')
const $searchText = document.querySelector('#searchText')
const $reinitButton = document.querySelector('#reinitButton')
const $delete = document.querySelector('#delete')



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
    //Si todo es correcto se hace push al array con el objeto nuevo
    dataObj.push(newDate);
  }
  //Actualizamos la pantalla y guardamos los datos nuevos en el local storage
  updateView();
  saveData();
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
      <span class="listItemSpan">Nombre: ${element.name}</span>
      <span class="listItemSpan">Cumpleaños: ${date.toUTCString().slice(5, 11)}</span>
      <span class="listItemSpan"> Tiene: ${getEdad(date)} años.</span>
    </p>
    <div class='itemDiv container'>
      <span id='${index}' ' class='deleteItem'>X</span>
    </div>
      </li>
    <hr class='hrItems'>`;
  });
}

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
  let data = $searchText.value
  let newArray = dataObj.filter(element => element.name == data)

  dataObj = newArray
  updateView()
  console.log('si funque')

}

const reinit = () => {
  $searchText.value = ''
  if(localStorage.getItem('dates')){

  data = localStorage.getItem("dates");
  data = JSON.parse(data);
  dataObj = data;
  }else dataObj = []
  updateView()

}

const deleteAll = () => {

  confirm('¿Estas seguro? Esto borrara todos los datos') ?
  localStorage.removeItem('dates') :
  null

  reinit()
}



const $deleteItem = document.querySelectorAll('.deleteItem')




const deleteItem = (e) => {

  if(confirm('¿Quieres elimiar esta fecha?')){
  let index = e.target.id
  e.stopPropagation()
  dataObj.splice(index, index + 1)
  saveData()
  location.reload()
}else null
}

$searchButton.addEventListener('click', search)
$reinitButton.addEventListener('click', reinit)
$delete.addEventListener('click', deleteAll)
$deleteItem.forEach(function(item) {
  item.addEventListener('click', deleteItem)

});
$reinitButton.addEventListener('click', reinit)