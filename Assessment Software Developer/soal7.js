function dekripsiChat(chat) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let hasilDekripsi = '';
  
    for (let i = 0; i < chat.length; i++) {
      const karakter = chat[i];
  
      if (alphabet.includes(karakter.toLowerCase())) {
        const indexAwal = alphabet.indexOf(karakter.toLowerCase());
        const indexDekripsi = (indexAwal - 5 + 26) % 26; // Handle pergeseran ke kiri
        const karakterDekripsi = alphabet[indexDekripsi];
  
        // Menyimpan huruf kapital atau kecil
        hasilDekripsi += (karakter === karakter.toUpperCase()) ? karakterDekripsi.toUpperCase() : karakterDekripsi;
      } else {
        // Menyimpan karakter selain huruf
        hasilDekripsi += karakter;
      }
    }
  
    return hasilDekripsi;
  }
  
  const chatTerenskripsi = "xfqfr bfmdz\ngjxtp lzj rfz ifkyfw jxi snm\ngwt, gjxtp qz rfz rfpfs in bfwlty lfp?\nfpz xfdfsl pfrz, rfz lfp ofin ufhfwpz\ndfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";
  
  const chatTerdekripsi = dekripsiChat(chatTerenskripsi);
  console.log(chatTerdekripsi);
  