import saveData from "./saveData.mjs";
import { dataObj } from "./variables.mjs";


// Elimina uno de los elementos del array que el usuario haya seleccionado

const deleteItem = (e) => {


    Swal.fire({
      title: 'Eliminar!',
      text: '¿Seguro quieres eliminar esto?',
      icon: 'question',
      confirmButtonText: 'Si',
      showCancelButton: 'true',
      cancelButtonText: 'Cancelar',
      
    }).then (results => {
      if(results.isConfirmed){
        let index = e.target.id;
         let copyDataObj = dataObj.slice()
         copyDataObj.splice(index, 1);
         saveData(copyDataObj)
      }
    })
    
  };

  
  export default deleteItem