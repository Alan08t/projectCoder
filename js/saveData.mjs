import updateView from "./updateView.js";
import { _setDataObj } from "./variables.mjs";


// Guardamos los datos actualizados en el localstorage

const saveData = (dataObj) => {
  let data = JSON.stringify(dataObj)
  localStorage.setItem("dates", data )  



  _setDataObj(dataObj)
  updateView(dataObj)
  };

  export default saveData