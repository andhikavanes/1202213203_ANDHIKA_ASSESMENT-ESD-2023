// Daftar teman-teman yang diundang
const friends = ["Ningguang", "Hutao", "Xiao", "Childe"];

// Kondisi awal
let cakeStatus = "utuh";

// Fungsi untuk menentukan siapa yang mungkin mengambil kue
function cariPencuri() {
  for (let i = 0; i < friends.length; i++) {
    let teman = friends[i];
    console.log(`Yanfei memeriksa ${teman}...`);

    switch (teman) {
      case "Ningguang":
        if (cakeStatus === "utuh") {
          console.log(`${teman} memeriksa kue dan menemukannya utuh.`);
        } else {
          console.log(`${teman} adalah pencuri! Kue telah diambil setelah dia memeriksa.`);
          return teman;
        }
        break;

      case "Hutao":
        console.log(`${teman} memberikan kado tanpa memperhatikan kue.`);
        break;

      case "Xiao":
        console.log(`${teman} memotret apa pun yang dilihatnya pertama kali.`);
        if (cakeStatus === "utuh") {
          console.log(`${teman} adalah pencuri! Dia mengambil kue setelah memotretnya.`);
          return teman;
        }
        break;

      case "Childe":
        console.log(`${teman} selalu membawa air mineral dan meletakkannya di meja.`);
        break;

      default:
        console.log(`${teman} tidak dikenali.`);
        break;
    }
  }

  console.log("Tidak ada yang mencuri kue.");
  return null;
}

// Panggil fungsi untuk mencari pencuri
const pencuri = cariPencuri();

// Tampilkan hasil
if (pencuri) {
  console.log(`Pencuri kue adalah: ${pencuri}`);
} else {
  console.log("Tidak ada yang mencuri kue.");
}
