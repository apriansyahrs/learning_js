let tanya = true;

  while(tanya){
    // menangkap pilihan player
  let p = prompt('Pilih: gajah, semut, orang');

  // menangkap pilihan computer
  let comp = Math.random();

  // membangkitakan bil random
  if(comp < 0.34){
    comp = 'gajah';
  } else if (comp >= 0.34 && comp < 0.67){
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  hasil = '';
  // menentukan rules
  if(p == comp){
    hasil = "SERI!";
  } else if(p == 'gajah'){
    hasil = (comp == 'orang') ? "MENANG" : "KALAH";
  } else if(p == 'orang'){
    hasil = (comp == 'gajah') ? "KALAH" : "MENANG";
  } else if(p == 'semut'){
    hasil = (comp == 'orang') ? "KALAH" : "MENANG";
  } else {
    hasil = 'Memasukan pilihan yang salah!';
  }

  // tampilkan hasilnya
  alert('Kamu memilih: ' + p + ' dan Komputer memilih: ' + comp + '\nMakahasilnya : kamu ' + hasil);

  tanya = confirm("Mau bermain lagi?");
}
alert("Terimakasih sudah bermain :)");
