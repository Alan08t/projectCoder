


//Obtenemos la edad en cantidad de años


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


export default getEdad