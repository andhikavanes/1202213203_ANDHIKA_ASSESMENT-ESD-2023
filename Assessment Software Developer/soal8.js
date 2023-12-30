const produk = [
    { nama: "TV", kategori: "elektronik", harga: 1000 },
    { nama: "headphone", kategori: "elektronik", harga: 200 },
    { nama: "baju", kategori: "fashion", harga: 50 },
    { nama: "gitar", kategori: "musik", harga: 300 },
    { nama: "sepatu", kategori: "olahraga", harga: 80 },
    { nama: "kamera", kategori: "elektronik", harga: 600 },
  ];
  
  const pelanggan = [
    { nama: "Rina", minat: ["elektronik", "musik"], beli: ["TV", "headphone"] },
    { nama: "Budi", minat: ["fashion", "musik"], beli: ["baju", "gitar"] },
    { nama: "Hartono", minat: ["olahraga", "elektronik"], beli: ["sepatu", "kamera"] },
  ];
  
  function rekomendasiProduk(pelangganNama) {
    const pelangganData = pelanggan.find((p) => p.nama === pelangganNama);
  
    if (!pelangganData) {
      return "Pelanggan tidak ditemukan";
    }
  
    const minatPelanggan = pelangganData.minat;
    const rekomendasi = [];
  
    produk.forEach((item) => {
      if (minatPelanggan.includes(item.kategori) && !pelangganData.beli.includes(item.nama)) {
        rekomendasi.push(item.nama);
      }
    });
  
    return rekomendasi;
  }
  
  // Contoh penggunaan
  const rekomendasiRina = rekomendasiProduk("Rina");
  console.log("Rekomendasi untuk Rina:", rekomendasiRina);
  