// Array loomine, lugemine, kirjutamine, lisamine, kustutamine
var arr = ["tekst", 2, 3]; // C#   var arr = new List<object>() { "test", 2, 3 };
console.log( arr[0] ); // "tekst"
console.log( arr[1] ); // 2
arr[0] = "uus tekst";
arr.push(4); // paneb lõppu nr 4-ja
arr.splice(2, 1); // kustutab positisoonilt 2 ära 1 elemendi
// arr sees on nüüd [ "uus tekst", 2, 4 ]

// Objekti loomine, lugemine, kirjutamine, lisamine, kustutamine
var obj = {nimi: "Kalle", vanus: 10};   // C#: new Dictionary<string, object>();  Java: new HashSet<object, object>();
console.log( obj.nimi ); // "Kalle"
console.log( obj["nimi"] ); // "Kalle"
obj.nimi = "Meelis";
obj["nimi"] = "Meelis";
obj.telefon = "55555555"; // Lisab uue property telefon
delete obj.vanus;
// obj sees on nüüd { nimi: "Meelis", telefon: "55555555" }