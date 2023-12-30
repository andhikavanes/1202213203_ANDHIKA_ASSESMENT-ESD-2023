function identifikasiNakal(namaAnak) {
    const hasil = {};
    
    namaAnak.forEach((nama) => {
      if (hasil[nama]) {
        hasil[nama]++;
      } else {
        hasil[nama] = 1;
      }
    });
  
    const anakNakal = Object.keys(hasil).filter((nama) => hasil[nama] > 1);
    const sortedAnakNakal = anakNakal.sort((a, b) => hasil[b] - hasil[a]);
  
    if (sortedAnakNakal.length > 0) {
      console.log(`${sortedAnakNakal.join(' dan ')} Nakal`);
    } else {
      console.log('Semuanya anak baik');
    }
  }
  
  // Contoh penggunaan
  const namaAnak1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
  identifikasiNakal(namaAnak1);
  
  const namaAnak2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
  identifikasiNakal(namaAnak2);
  
  const namaAnak3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
  identifikasiNakal(namaAnak3);
  