let ejemplo = [
    {
        id: 1,
        nombre: "hola"
    },
    {
        id: 2,
        nombre: "adi"
    },
    {
        id: "este no",
        nombre: "este no"
    }
]

const objetosConID = ejemplo.filter(item => typeof(item.id) == "number")

console.log(objetosConID)
