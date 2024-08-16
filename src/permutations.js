const permutations = (str) => {
    const result = [];
    const shufflings = (arr = [], current = 0) => {
        if (current === arr.length) {
            result.push(arr.join(''));
            return;
        }
        const existStr = new Set()
        for (let index = current; index < arr.length; index++) {
            if(existStr.has(arr[index])) {
                continue
            }
            existStr.add(arr[index])
            const newArr = arr.slice();
            [newArr[current], newArr[index]] = [newArr[index], newArr[current]];
            shufflings(newArr, current + 1);
        }
    }

    const characters = str.split('');
    shufflings(characters, 0);
    return result; 
};

module.exports = permutations;