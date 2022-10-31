import createItem from "./createItem.mjs"
import { $birthdayList } from "./variables.mjs"


const updateView = (data) => {

    $birthdayList.innerHTML = null
    data.forEach((element, index) => {
        $birthdayList.innerHTML += createItem(element, index)
    });
}
export default updateView