var printSegitiga   = 5
var hasil       = ''
// perulangan pertama
for (let k = printSegitiga ; k >= 1 ; k--){
        // perulangan kedua
        for ( let s = 1 ; s <= k ; s++  ){
            hasil += s
        }
    hasil += '\n'

}

console.log(hasil)

;


var batas2 = 5
var a = 1
var hasil2 = ''

while( batas2 >= a ){

    for (var m = 1; m <= batas2; m++){
        hasil2 += m
        }

    hasil2 += '\n'
    batas2--

}

console.log(hasil2)