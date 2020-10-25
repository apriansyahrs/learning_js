let mahasiswa = {
  nama: 'Apriansyah Rizqi Setiawan',
  angkatan: '2019',
  jurusan: 'MI-WP',
  ipSemester: [3.8, 3.8, 3.8],
  ipkumulatif: function(){
    let total = 0;
    let ips = this.ipSemester;
    for(let i = 0; i < ips.length; i++){
      total += ips[i];
    }
    return total/ips.length;
  }
}
console.log(mahasiswa.ipkumulatif());

// membauat object
// 1. object literal
let mhs1 = {
  nama: 'Apri',
  umur: 19,
  ips: [3.8, 3.8, 3.8],
  alamat: {
    jalan: "Jl. Kembang GG. VI No. 333",
    kota: "Cirebon",
    provinsi: "Jawa Barat"
  }
};

let mhs2 = {
  nama: 'rizqi',
  umur: 19,
  ips: [3.8, 3.8, 3.8],
  alamat: {
    jalan: "Jl. Kembang GG. VI No. 333",
    kota: "Cirebon",
    provinsi: "Jawa Barat"
  }
};


// 2. function decalration
function buatObjectahasiswa(nama, nrp, email, jurusan) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}
let mhs3 = buatObjectahasiswa('Juli', '04628112', 'email@hskahd.com', 'Barbar');


// 3. constructor function (keyword new)
function Mahasiswa (nama, nrp, email, jurusan){
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}
let mhs4 = new Mahasiswa('Maret', '012128112', 'emailsag@hskahd.com', 'Barbarku');

// 4. object.create()