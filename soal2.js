const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

var n           = mtk + bahasaIndonesia + bahasaInggris + ipa
var average     = n/4
var result1     = "Rata-rata = " + average 
console.log(result1)

if(average >= 90 && average <= 100){
    console.log("Grade = A")
}
else if(average >= 80 && average < 90){
    console.log("Grade = B")
}
else if(average >= 70 && average < 80){
    console.log("Grade = C")
}
else if(average >= 60 && average < 70){
    console.log("Grade = D")
}
else if(average >= 0 && average < 60){
    console.log("E")
}
else{console.log("error")}