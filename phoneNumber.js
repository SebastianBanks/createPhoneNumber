function createNumber(phoneNumber) {
    let number = String(phoneNumber.join(""))
    let formattedNumber = "(" + number.slice(0, 3) + ") " + number.slice(3, 6) + "-" + number.slice(6, 10)

    console.log(formattedNumber)
    return formattedNumber
}

createNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])