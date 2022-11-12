// Neli varianti kuidas tellimuse read salvestada CSV failina
const fs = require('fs');

let tellimus = {
    "id": 2113,
    "orderNumber": "E210126001",
    "createdAt": "2021-01-26 16:04:24",
    "clientName": "Kalle Tali",
    "deliveryType": "Omniva smartpost",
    "deliveryValue": 178,
    "rows": [
        {
            "article_id": 31,
            "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",
            "product_code": "257549",
            "price": 49.1666666667,
            "amount": 1,
            "vat": 0.2
        },
        {
            "article_id": 23420,
            "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk",
            "product_code": "355836",
            "price": 5.0666666667,
            "amount": 2,
            "vat": 0.2
        },
        {
            "article_id": 23421,
            "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk",
            "product_code": "000000000501267301",
            "price": 5.825,
            "amount": 1,
            "vat": 0.2
        }
    ]
}

let data
// CSV Header
// Variant 1
data = "articleId;name;productCode;price;amount;vat\n"
// Variant 3
for (let key in tellimus.rows[0]) {
    data += key + ";"
}
data += "\n"
// Variant 4
data = Object.keys(tellimus.rows[0]).reduce((data, key) => data + ";" + key) + "\n"
// Variant 5
data = Object.keys(tellimus.rows[0]).join(";") + "\n"

for (let product of tellimus.rows) {
    // Variant 1 - string concatenation
    data += product.article_id+";"+product.name+";"+product.product_code+";"+product.price+";"+product.amount+";"+product.vat+"\n"

    // Variant 2 - destructuring + string concatenation
    let {article_id, name, product_code, price, amount, vat} = product;
    data += article_id+";"+name+";"+product_code+";"+price+";"+amount+";"+vat+"\n"

    // Variant 3 - looping object properties/values + string concatenation
    for (let key in product) {
        data += product[key] + ";"
    }
    data += "\n"

    // Variant 4 - sama mis Variant 3 aga functional lähenemisega
    data += Object.values(product).reduce((data, value) => data + ";" + value) + "\n"
    
    // Variant 5
    data += Object.values(product).join(";") + "\n"
}


// Callback function
fs.writeFile('C:\\Users\\timo.triisa\\Desktop\\test.txt', data, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
    console.log("Fail on kirjutatud")
});

console.log("Lõpp")
