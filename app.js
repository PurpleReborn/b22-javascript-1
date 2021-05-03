// soal 1
const biodata = {
    name            :"sandi",
    age             :19,
    hobbies         :['Travelling','Camping','Mountain climbing'],
    IsMaried        :false,
    schoolList      :
        [
            {
                name    :'SDN Cibeureum 7',
                yearIn  :2007,
                yearOut :2013,
                major   :null,
            },
            {
                name    :'SMPN 7 Cimahi',
                yearIn  :2013,
                yearOut :2016,
                major   :null,
            },
            {
                name    :'SMAN 6 Cimahi',
                yearIn  :2016,
                yearOut :2019,
                major   :'IPA',
            }

        ],

    skill           :
        [
            {
                skillName   :'Front end Web Developer',
                level       :'advanced' 
            },
            {
                skillName   :'Back end Web Developer',
                level       :'beginner'    
            },
            {
                skillName   :'Vector Illustration',
                level       :'advanced'    
            },

        ],

    InterestInCoding : true
}

// soal 2
const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

var n           = mtk + bahasaIndonesia + bahasaInggris + ipa
var average     = n/4
var result1 = "Rata-rata = " + average 
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


// soal 3
var row = 5;

for (var i = 1; i <= row; i++) {
	var num = '';

	for (var j = i; j <= row; j++) {
		num += j;
	}
	console.log(num);
}

// soal 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

    

    let data2 = {...data}
    data2.name = 'Sandi Muhamad Rizalul' 
    data2.email = "sandimrizalul2@gmail.com"
    let hobby = "Travelling"
    let data3 = {...data2,hobby}
    console.log(data3)


    let {
        id,
        name,
        username,
        email,
        address: 
        {
        street: item1,
        suite,
        city: item2,
        zipcode,
        },
        phone,
        website,
        } = data


console.log(item1,item2)



