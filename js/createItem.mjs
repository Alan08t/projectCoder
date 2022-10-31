import getEdad from './getEdad.mjs';
import switchSign from './switchSign.mjs';
import switchSignColor from './switchSignColor.mjs';



//Actualiza la vista borrando los datos viejos y renderizando los nuevos
const createItem = ({name, date, month, day}, index) => {
    //Vaciamos la lista que contiene los items
    //Y para cada elemento del array agregamos un nuevo item    
      date = new Date(date);


      return(`
      <li class="listItem container ${index % 2 === 0 ? 'darkTheme' : 'lightTheme'}">
      <p class='spanContainer container'>
        <span class='nameAndDateSpan'>
        <span class="listItemSpan">${ name}</span>
        <span class="listItemSpan">${getEdad(date).toString()}</span>
        <span style='color:${switchSignColor(month, day)}' class="listItemSpan signSpan"}'>${
          switchSign(month, day)
      }</span>
        </span>
        <span class="listItemSpan birthdaySpan">${date
          .toUTCString()
          .slice(5, 11)}</span>
      </p>
      <div class='itemDiv container'>
        <span id='${index}' class='deleteItem'>X</span>
      </div>
        </li>
      `)
    ;
  };


  export default createItem