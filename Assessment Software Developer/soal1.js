function dataReviewAplikasi(input) {
    var nilaiMIN = Math.min(...input);
    var nilaiMAX = Math.max(...input);

    var sum = input.reduce(function (acc, nilai) {
        return acc + nilai;
    }, 0);

    var nilaiAVG = sum / input.length;

    return [nilaiMIN, nilaiMAX, parseFloat(nilaiAVG.toFixed(1))];
}

var input = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5] ;
var hasil = dataReviewAplikasi(input);

console.log(hasil);