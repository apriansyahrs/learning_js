// // memanipulasi array
// 1. Menambahkan isi array
// let arr = [];
// arr[0] = 'Aprianysah';
// arr[1] = 'Rizqi';
// arr[3] = "Setiawan";
// console.log(arr);

// 2, Menghapus isi array
// let arr = ['Apriansyah', 'Rizqi', 'Setiawan'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
// for(let i = 0; i < hari.length; i++){
//   console.log(hari[i]);
// }

// methods pada array js
// 1. Join
// let arr = ['Apriansyah', 'Rizqi', 'Setiawan', 'AMANDA'];
// console.log(arr.join('-'));

// 2. Push & pop
// arr.push('Amanda', 'Citra'); menambah array dari belakang
// arr.pop(''); menghapus sebuah array dari belakang
// console.log(arr.join('-'));


//  3. unshift &  shift
// arr.unshift('Doddy'); menambah array dari depan
// arr.shift(); mengahapus array dari depan
// console.log(arr.join('-'));

// 4. slice & splice
// arr.splice(2, 0,'Amanda');
// console.log(arr.join('-'));

// let arr2 = arr.slice(1,4);
// console.log(arr2);

// 5. foreach 
// let angka = [1,2,3,4,5,6,7,8,9];
// angka.forEach(element => {
//   console.log(element);  
// });
// let arr = ['Apriansyah', 'Rizqi', 'Setiawan', 'AMANDA'];
// arr.forEach(function (e,i) {
//   console.log('Mahasiswa ke-'+ (i+1) + ' adalah: ' + e);  
// });

//6. Map
// let angka = [1,2,3,4,5,6,7,8,9];
// let angka2 = angka.map(function(e){
//   return e * 2;
// })

// console.log(angka2.join('-'));

// 7. Sort
// let angka = [1,2,4,3,9,6,7,8,5];
// angka.sort()
// console.log(angka.join("-"));

// let angka = [1,2,10,3,20,80,7,8,5];
// angka.sort(function(a,b){
//   return a-b;
// })
// console.log(angka.join("-"));

// 8. filter
// let angka = [1,2,10,3,20,80,7,8,5];
// let angka2 = angka.filter(function(x){
//   return x > 5;
// });
// console.log(angka2.join("-"));

// 9. find
let angka = [1,2,10,3,20,80,7,8,5];
let angka2 = angka.find(function(x){
  return x > 5;
});
console.log(angka2);
