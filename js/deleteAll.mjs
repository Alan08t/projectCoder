const deleteAll = () => {
    // confirm("¿Estas seguro? Esto borrara todos los datos")
    //   ? localStorage.removeItem("dates")
    //   : null;
  
    // recoveryData();


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