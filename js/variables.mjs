import saveData from "./saveData.mjs";

export const $birthdayList = document.querySelector(".birthdayList");
export const $date = document.querySelector("#date");
export const $name = document.querySelector("#name");
export const $send = document.querySelector("#send");
export const $searchButton = document.querySelector("#searchButton");
export const $reinitButton = document.querySelector("#reinitButton");
export const $delete = document.querySelector("#delete");
export const $deleteItem = document.querySelectorAll(".deleteItem");
export let newDate;
export let dataObj = [];
let cloneData = {...dataObj}
export const _setDataObj = (_dataObj) => {
    dataObj = _dataObj
}

export const _addNewDate = (date) => {
    dataObj.push(date)
    saveData(dataObj)
}
