// en la constante de inputFirstName guardare la informacion del nombre del input
const inputFisrtName = document.getElementById('firstName')
// en la constante de btn guardare el boton
const btn = document.getElementById('btn')
// en la constante de inputemail guardare la informacion del email del input
const inputemail = document.getElementById('email')
// en la constante de inputmensaje guardare la informacion del textarea
const inputMensaje = document.getElementById('textarea')
// en la constante de inputlabel guardare la informacion del saludo para representar el nombre que le ponga
const inputlabel = document.getElementById('saludar')
// en la constante de muestra guardare la informacion del array de todos los contactos que se guarden en el localstorage
const muestra = document.getElementById('muestra')
// en la constante de borrar la usare para borrar la informacion con un boton del local storage
const borrar = document.getElementById('borrar')

// este array lo usare para guardar la informacion que vaya poniendo en el localStorage de "arrayContacto"
let arrayContactos = JSON.parse(localStorage.getItem("arrayContacto")) || []
// este array lo usare para iterar las arrays que saque del localStorage de "arrayContacto"
let arrayMuestra = []


// Genero la funcion de "Enviar"
function onSubmit(e) {
    e.preventDefault()

    // Para agregar "contacto" con sus respectivos valores de (nombre, email, mensaje)
    localStorage.setItem("contacto", JSON.stringify({
        nombre : inputFisrtName.value,
        email : inputemail.value,
        mensaje : inputMensaje.value
    }));

    // Para mostrar por pantalla el saludo, accediendo al nombre del localStorage de "contacto"
    inputlabel.innerText = "Hola soy " + JSON.parse(localStorage.getItem("contacto")).nombre

    // Ahora añado a "arrayContacto" los elementos del localStorage de "contacto"
    arrayContactos.push(JSON.parse(localStorage.getItem("contacto")))

    // Y les agrego al localStorage de "arrayContacto" el array de antes con los valores de localStorage de "contacto"
    localStorage.setItem("arrayContacto", JSON.stringify(
        arrayContactos
    ))
   
    // Este array adquiere la informacion de todo el localStorage de "arrayContacto" para iterar despues
    arrayMuestra = JSON.parse(localStorage.getItem("arrayContacto"))

    // Creo una variable que genere un elemento en HTML llamada "label"
    let label = document.createElement("label")

    // Genero el bucle basandome en el array de "arrayMuestra" para sacar todos los arrays que tiene dentro el localStorage de "arrayContacto"
    for (let i = 0; i < arrayMuestra.length; i++) {
    
        label.innerHTML ="<br>Nombre : " + arrayMuestra[i].nombre + " <br>Contacto : " + arrayMuestra[i].email + " <br>Mensaje : " + arrayMuestra[i].mensaje + "<br>"
        
        //Y le asigno el label al body
        document.body.appendChild(label);
    }

}

// Este condicional lo hago porque cuando borro la cache me dice que arrayMuestra no puede cojer nada del localStorage de "arrayContacto" lo cual me obliga a poner esta condicion
if(JSON.parse(localStorage.getItem("arrayContacto")) !== null){

    // Este array adquiere la informacion de todo el localStorage de "arrayContacto" para iterar despues
    arrayMuestra = JSON.parse(localStorage.getItem("arrayContacto"))

    // Genero el bucle basandome en el array de "arrayMuestra" para sacar todos los arrays que tiene dentro el localStorage de "arrayContacto"
    for (let i = 0; i < arrayMuestra.length; i++) {

        // Creo una variable que genere un elemento en HTML llamada "label"
        let label = document.createElement("label")

        label.innerHTML ="<br>Nombre : " + arrayMuestra[i].nombre + " <br>Contacto : " + arrayMuestra[i].email + " <br>Mensaje : " + arrayMuestra[i].mensaje + "<br>"
        
        //Y le asigno el label al body
        document.body.appendChild(label);
    }
    
}

// Esta funcion la usare para eliminar la cache
function del(e){
    e.preventDefault()
    //Esta funcion limpia la cache
    localStorage.clear();
    //Esta funcion recarga la pagina
    location.reload()
}

  
btn.addEventListener('click', onSubmit)

borrar.addEventListener('click', del)



