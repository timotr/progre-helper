// Create
let töötaja = {
  name: "Timo",
  lepinguNr: "",
  palk: 10
}

// Read
töötaja.name // "Timo"
töötaja['name'] // "Timo"
töötaja.vanus // undefined

töötaja.hasOwnProperty('name') //true
töötaja.hasOwnProperty('vanus') //false

// Update
töötaja.lepinguNr = "A11234"
töötaja['lepinguNr'] = "A11234"
töötaja.lõpetatudProjekte = 66

// Delete
delete töötaja.name
delete töötaja['name']
