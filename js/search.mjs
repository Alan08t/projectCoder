import updateView from "./updateView.js";
import { dataObj, _setDataObj } from "./variables.mjs";

const search = (word) => {
    
  let results = []

  dataObj.filter((element, index) => { 
    element.name.includes(word) ?
    results.push(dataObj[index]) :
    null
  } )



  updateView(results)
  };

  
  export default search