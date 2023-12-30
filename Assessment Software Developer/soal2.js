function ispalindrome(kalimat) {
    const lowerCase = kalimat.toLowerCase();
    const reversed = lowerCase.split('').reverse().join('');

    return lowerCase === reversed;
}

var kalimat = "Aku Suka Kamu";
var hasil = ispalindrome(kalimat);

if (hasil === true) {
    console.log("eureeka!");
} else {
    console.log("suka blyat");
}

