function hitungKombinasiUsername(namaLengkap) {
    const namaKecil = namaLengkap.toLowerCase();
    const panjangNama = namaKecil.length;
    let jumlahKombinasi = 0;
  
    for (let i = 1; i <= panjangNama && i <= 6; i++) {
      jumlahKombinasi += kombinasi(panjangNama, i);
    }
  
    return jumlahKombinasi;
  }
  
  function faktorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * faktorial(n - 1);
    }
  }
  
  function kombinasi(n, k) {
    return faktorial(n) / (faktorial(k) * faktorial(n - k));
  }
  
  // Contoh penggunaan
  const namaLengkap = "Naip Lovyu";
  const jumlahKombinasi = hitungKombinasiUsername(namaLengkap);
  
  console.log(`Jumlah kombinasi username yang mungkin: ${jumlahKombinasi}`);
  