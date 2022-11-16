import { $birthdayList } from "./variables.mjs"


// Inserta un nuevo elemento a la lista

const addItem  = (item) => {

    $birthdayList.innerHTML += item

}



export default addItem