
//Borramos todos los elementos del array y los datos del localstorage

const deleteAll = () => {

    Swal.fire({
      title: 'Eliminar todo',
      text: '¿Seguro quieres eliminar todo?',
      icon: 'question',
      confirmButtonText: 'Si',
      showCancelButton: 'true',
      cancelButtonText: 'Cancelar',
      
    }).then (results => {
      if(results.isConfirmed){
        localStorage.removeItem("dates")
        location.reload()
      }
    })
  };


  export default deleteAll