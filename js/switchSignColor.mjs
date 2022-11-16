// Con los datos obtenidos del date introducido por el usuario
// le asignamos el color correspondiente


const switchSignColor = (month, day) => {

  let color;

  switch (month) {

    case "Jan":
      day < 20 ? color = "#FFF151" : color = "#001C9A";
      break;

    case "Feb":
      day < 19 ? (color = "#001C9A") : (color = "#9DAFFF");
      break;

    case "Mar":
      day < 21 ? (color = "#9DAFFF") : (color = "#BDBDBD");
      break;

    case "Apr":
      day < 20 ? (color = "#BDBDBD") : (color = "#4F3824");
      break;

    case "May":
      day < 21 ? (color = "#4F3824") : (color = "#FF2F7F");
      break;

    case "Jun":
      day < 21 ? (color = "#FF2F7F") : (color = "#DB0000ed");
      
      break;

    case "Jul":
      day < 23 ? (color = "#DB0000") : (color = "#CBBB2E");
      
      break;

    case "Aug":
      day < 23 ? (color = "#CBBB2E") : (color = "#41EE47");
      
      break;

    case "Sep":
      day < 23 ? (color = "#41EE47") : (color = "#1E7F4B");
      
      break;

    case "Oct":
      day < 23 ? (color = "#1E7F4B") : (color = "#084501");
      break;

    case "Nov":
      day < 22 ? (color = "#084501") : (color = "#570000");
      break;

    case "Dec":
      day < 22 ? (color = "#570000") : (color = "#FFF151");
      break;
  }


  return color
};

export default switchSignColor;
