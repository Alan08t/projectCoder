import updateView from "./updateView.js";
import { _setDataObj } from "./variables.mjs";


const saveData = (dataObj) => {
  let data = JSON.stringify(dataObj)
  localStorage.setItem("dates", data )  



  _setDataObj(dataObj)
  updateView(dataObj)
  };

  export default saveData