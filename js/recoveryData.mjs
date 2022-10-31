import updateView from "./updateView.js";
import { _setDataObj } from "./variables.mjs";

const recoveryData = () => {
    let data = localStorage.getItem('dates')
    data = JSON.parse(data)
    _setDataObj(data)
    updateView(data)

}

export default recoveryData