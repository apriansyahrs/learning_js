let jmlhAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for(noAngkot; noAngkot <= jmlhAngkot; noAngkot++){
  if(noAngkot <= 6 && noAngkot !== 5){
    console.log('Angkot No. ' + noAngkot +' beroperasi dengan baik');
    noAngkot++;
  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
    console.log('Angkot No. ' + noAngkot +' bekerja dengan semangat');
  } else {
    console.log('Angkot No. ' + noAngkot +' tidak beroperasi dengan baik');
  }
}