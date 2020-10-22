// // Penulisan Variable dan mengeksekusinya
// const typeDataString = "Hello World";
// console.log(typeDataString);

// // popUp box atau Dialog Box
// alert("Hello Apri!");

// let tes = confirm("Setuju ble cok?");
// if (tes === true){
//   alert('Haloo');
// } else {
//   alert("Dih males")
// }

// // prompt("Masukan nama anda:");
// let nama = prompt("Masukan nama anda:");
// console.log(nama);


// mengkombinasi alert, promt, confirm dan looping while
alert("Selamat Datang");
let lagi = true;

while(lagi){
  let name = prompt('Siapa nama anda:');
  alert('Halo salam kenal, ' + name);

  lagi = confirm('coba lagi?')
}
alert("Terimakasih!");