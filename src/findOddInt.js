const findOddInt = (arrInt) => {
    const data = {}
    for (let index = 0; index < arrInt.length; index++) {
        data[arrInt[index]] = (data[arrInt[index]] || 0) + 1
    }

    const maxOdd = Object.entries(data).reduce((maxOddObj, [key, value]) => {
        if (value % 2 === 1 && value > maxOddObj.oddTimes) {
            return {
                number: key,
                oddTimes: value
            }
        }
        return maxOddObj
    }, { number: -1, oddTimes: 0 })

    if (maxOdd.oddTimes === 0) {
        return 'odd int not found'
    }
    return parseInt(maxOdd.number)
};


module.exports = findOddInt;
