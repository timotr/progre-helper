CRUD 
Create
Read
Update
Delete

// Array CRUD (list, massiiv, array)
//#region Create
[]
["test",2,3,null]
console.log([])
let list = []
let list = ["test",2,3,null]
let fruits = ["orange","banana","apple"]
//#endregion
//#region Read
list[0] // "test"
list[1] // 2
list[2] // 3
list[3] // null
list[4] // undefined

list.length // mitu elementi listis on
// viimane element
list[5-1]  // undefined
// eelviimane element
list      // null

// kuidas leida array sees element
// tagastab kus positisoonil element arrays on
// -1 tähendab et ei ole arrays
fruits.indexOf("pear") // -1
fruits.indexOf("apple") // 2

fruits.includes("pear") // false
fruits.includes("apple") // true

list.filter(elem => elem > 0) // 2,3
//#endregion
//#region Update
fruits.push("kiwi")
fruits[4] = "watermelon"
list[4] = "not null"
// esimene number on positisoon/index
// teine number on mitu ära kustutada
// kolmas, neljas, viies jne on mida juurde lisada
fruits.splice(2,0,"plum") // lisab kolmandaks elemendiks plum
//#endregion
// Delete
fruits.pop()
fruits.splice(2,1) /// kusutab kolmanda elemendi ära





//Nimekiri pakkumistest: odavaim, kalleim, keskmine