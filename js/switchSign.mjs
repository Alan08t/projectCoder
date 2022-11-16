// Con los datos obtenidos del date introducido por el usuario
// le asignamos el signo correspondiente

const switchSign = (month, day) => {

  let sign;

  switch (month) {

    case "Jan":
      day < 20 ? sign = "Capricornio" : sign = "Acuario";
      break;

    case "Feb":
      day < 19 ? (sign = "Acuario") : (sign = "Piscis");
      break;

    case "Mar":
      day < 21 ? (sign = "Piscis") : (sign = "Aries");
      break;

    case "Apr":
      day < 20 ? (sign = "Aries") : (sign = "Tauro");
      break;

    case "May":
      day < 21 ? (sign = "Tauro") : (sign = "Géminis");
      break;

    case "Jun":
      day < 21 ? (sign = "Géminis") : (sign = "Cáncer");
      
      break;

    case "Jul":
      day < 23 ? (sign = "Cáncer") : (sign = "Leo");
      
      break;

    case "Aug":
      day < 23 ? (sign = "Leo") : (sign = "Virgo");
      
      break;

    case "Sep":
      day < 23 ? (sign = "Virgo") : (sign = "Libra");
      
      break;

    case "Oct":
      day < 23 ? (sign = "Libra") : (sign = "Escorpio");
      break;

    case "Nov":
      day < 22 ? (sign = "Escorpio") : (sign = "Sagitario");
      break;

    case "Dec":
      day < 22 ? (sign = "Sagitario") : (sign = "Capricornio");
      break;
  }


  return sign
};

export default switchSign;
