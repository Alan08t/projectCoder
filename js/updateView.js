import createItem from "./createItem.mjs"
import { $birthdayList, dataObj } from "./variables.mjs"


const updateView = (data) => {

    if($birthdayList.innerHTML === null) {
        console.log('no hay nada')
        return null
    }

    $birthdayList.innerHTML = null
    data.forEach((element, index) => {
        $birthdayList.innerHTML += createItem(element, index)
    });
}
export default updateView