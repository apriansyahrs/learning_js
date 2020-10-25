// let i = prompt('Masukan angka: ');

// switch(i){
//   case '1' :
//     alert("Anda memasukan angka 1")
//     break;

//     case '2' :
//     alert("Anda memasukan angka 1")
//     break;

//     case '3' :
//     alert("Anda memasukan angka 1")
//     break;

//     case '4' :
//     alert("Anda memasukan angka 1")
//     break;

//     default:
//       alert("Anda bukan memasukan angka")
//       break;
// }

// let item = prompt('Masukan nama makanan / minumamn : \n nasi, daging, susu, hamburder, softdrink?')

// switch(item){
//   case 'nasi' :
//     alert('makanan sehat')
//     break;

//     case 'susu' :
//     alert('makanan sehat')
//     break;

//     case 'hamburger' :
//       alert('makanan tidak sehat')
//       break;

//       case 'softdrink' :
//       alert('makanan tidak sehat')
//       break;

//       default :
//       alert('makanan tidak terdeteksi')
//       break;
// }

let item = prompt('Masukan nama makanan / minumamn : \n nasi, daging, susu, hamburder, softdrink?')

switch(item){
  case 'nasi' :
  case 'susu' :
    alert('makanan sehat')
    break;

  case 'hamburger' :
  case 'softdrink' :
     alert('makanan tidak sehat')
     break;

  default :
     alert('makanan tidak terdeteksi')
    break;
}