"use strict";
function findNumerPhones(phones = '') {
    let vinaphone = [];
    let viettel = [];
    let mobiphone = [];
    // cut string
    for (let i = 0; i < phones.length; i += 10) {
        newArr.push(phones.substring(i, i += 10));
    }
    console.log(newArr);
    //add number to service providers
    for (let index = 0; index < newArr.length; index++) {
        if (newArr[index].substring(0, 3) == '035' || newArr[index].substring(0, 3) == '542') {
            viettel.push(newArr[index]);
        }
        else if (newArr[index].substring(0, 3) == '645' || newArr[index].substring(0, 3) == '831') {
            mobiphone.push(newArr[index]);
        }
        else {
            vinaphone.push(newArr[index]);
        }
    }
    console.log(`vinaphone service phone have number phone: ${vinaphone}`);
    console.log(`viettel service phone have number phone: ${viettel}`);
    console.log(`mobiphone service phone have number phone: ${mobiphone}`);
}
let phones = '0352222657164646455454257143684268137543645138412842814837458314524185436284128416841362841368421867163386436817243873816984168';
let newArr = [];
findNumerPhones(phones);
