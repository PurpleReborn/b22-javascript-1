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
    data2.email = 'sandimrizalul2@gmail.com'
    data2.hobby = "Travelling"
    console.log(data2)


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
