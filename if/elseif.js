// if(kondisi){
//   aksi
// }

let angka = prompt('masukan angka');
if (angka % 2 == 0){
  alert(angka + " adalah bilangan GENAP")
} else if (angka % 2 == 1) {
  alert(angka + " adalah bilangan GANJIL")
} else {
  alert('Yang anda masukan bukan angka!');
}
