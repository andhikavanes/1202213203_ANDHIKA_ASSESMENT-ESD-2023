// Definisi menu
const menu = [
    { nama: "Ayam Goreng Krispi", tipe: "Makanan", harga: 15000 },
    { nama: "Ayam Puk Puk (Bukan di Geprek)", tipe: "Makanan", harga: 13000 },
    { nama: "Ayam Bakar", tipe: "Makanan", harga: 20000 },
    { nama: "Es Teh", tipe: "Minuman", harga: 5000 },
    { nama: "Es Jeruk", tipe: "Minuman", harga: 7000 }
  ];
  
  // Fungsi untuk menghitung total biaya dengan pajak
  function hitungTotalBiaya(pesanan) {
    let totalBiaya = 0;
  
    pesanan.forEach(item => {
      const menuTerpilih = menu.find(menuItem => menuItem.nama === item.nama);
      if (menuTerpilih) {
        const pajak = menuTerpilih.tipe === "Makanan" ? 0.05 : 0.03;
        totalBiaya += (menuTerpilih.harga * item.jumlah) * (1 + pajak);
      }
    });
  
    // Pajak transaksi 15%
    totalBiaya *= 1.15;
  
    return totalBiaya;
  }
  
  // Pesanan dari sahabat-sejati
  const pesananRehan = [
    { nama: "Ayam Bakar", jumlah: 2 },
    { nama: "Es Teh", jumlah: 1 }
  ];
  
  const pesananAmbaRoni = [
    { nama: "Ayam Puk Puk (Bukan di Geprek)", jumlah: 1 },
    { nama: "Es Teh", jumlah: 3 }
  ];
  
  const pesananFaizNgawi = [
    { nama: "Ayam Goreng Krispi", jumlah: 1 },
    { nama: "Ayam Puk Puk (Bukan di Geprek)", jumlah: 1 },
    { nama: "Ayam Bakar", jumlah: 1 },
    { nama: "Es Teh", jumlah: 1 },
    { nama: "Es Jeruk", jumlah: 1 }
  ];
  
  // Menghitung total biaya masing-masing pesanan
  const totalBiayaRehan = hitungTotalBiaya(pesananRehan);
  const totalBiayaAmbaRoni = hitungTotalBiaya(pesananAmbaRoni);
  const totalBiayaFaizNgawi = hitungTotalBiaya(pesananFaizNgawi);
  
  // Menampilkan hasil
  console.log("Total biaya Rehan Whangsap:", totalBiayaRehan);
  console.log("Total biaya Amba Roni:", totalBiayaAmbaRoni);
  console.log("Total biaya Faiz Ngawi:", totalBiayaFaizNgawi);
  