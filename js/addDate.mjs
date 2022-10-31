import { $name, $date, _addNewDate, dataObj, _setDataObj } from "./variables.mjs";
import createItem from "./createItem.mjs";
import addItem from "./addItem.mjs";

//El boton agregar añade un nuevo objeto al array con los datos ingresados por el usuario
const addDate = () => {
  let newDate = {};
  let index;

  dataObj.length === 0 ?
  index = 0 :
  index = dataObj.length

  //Validando los datos de entrada
  if ($name.value === "" || $date.value === "") {
    alert("El nombre y la fecha no pueden estar vacios.");
    return null
  } else {
    newDate.name = $name.value;
    newDate.date = new Date($date.value);
    newDate.valueSort = $date.valueAsNumber;
    newDate.month = newDate.date.toUTCString().slice(8, 11);
    newDate.day = newDate.date.toUTCString().slice(5, 7);

    //Actualizamos la pantalla y guardamos los datos nuevos en el local storage
    addItem(createItem(newDate, index));
    _addNewDate(newDate);
  }

  Swal.fire({
    title: 'Agregado con éxito',
    text: 'Se agrego correctamente',
    icon: 'success',
    confirmButtonText: 'Ok',
  })



};

export default addDate;
