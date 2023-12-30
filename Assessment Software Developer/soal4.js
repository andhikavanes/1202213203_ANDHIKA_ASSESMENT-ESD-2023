function findDuplicate(array) {
    const duplicates = {}
    for (const numbers of array) {
        duplicates[numbers] = (duplicates[numbers] || 0) + 1;
        if (duplicates[numbers] === 2) {
            return true;
        }
    }
    return false;
}

const array = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18,  20, 17, 19];
const hasil = findDuplicate(array);

console.log(hasil);