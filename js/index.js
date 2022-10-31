import addDate from './addDate.mjs';
import deleteAll from './deleteAll.mjs';
import deleteItem from './deleteItem.mjs';
import search from './search.mjs';
import recoveryData from './recoveryData.mjs';
//Primero chequeamos que no exista data en el local storage
//En caso de existir se actualiza la pantalla con los datos guardados

if (!localStorage.getItem("dates")) null;
else recoveryData()



//Guardamos los datos nuevos en un string en el local storage


document.addEventListener('click',(e) => {

  if(e.target.matches('.reinitButton'))
  reinit()
  if(e.target.matches('.deleteAll'))
  deleteAll()
  if(e.target.matches('.deleteItem'))
  deleteItem(e)
  if(e.target.matches('.send'))
  addDate()
})


document.addEventListener('input',(e) => {
      
  if(e.target.matches('.searchInput'))
    search(e.target.value); 
    e.preventDefault()

} )


document.addEventListener('submit', (e) => {
  e.preventDefault()
})












