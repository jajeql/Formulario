let tabla=[
    {nombre:'Juana',apellido:'Perez',cedula:'789654321',email:'jperz@gmail.com',direccion:'calle 9'},
    {nombre:'Juan',apellido:'Gomez',cedula:'159753456',email:'jgomez@gmail.com',direccion:'calle 16'},
    {nombre:'Jorge',apellido:'Gonzalez',cedula:'145654789',email:'jgonz@gmail.com',direccion:'calle 95'}
]

let cuerpotabla=document.getElementById('cuerpo-tabla')

let i=0

const listar=(e)=>{
    e.preventDefault()
    let filas=""
    for (let i = 0; i < tabla.length; i++) {
        filas+=`<tr>
        <th scope="row">${i+1}</th>
        <td>${tabla[i].nombre}</td>
        <td>${tabla[i].apellido}</td>
        <td>${tabla[i].cedula}</td>
        <td>${tabla[i].email}</td>
        <td>${tabla[i].direccion}</td>
      </tr>`
    }
    cuerpotabla.innerHTML=filas;
    console.log(filas)
}

const registrar=(e)=>{
  
    const form = document.querySelector('#form-usuarios')

    if (form.checkValidity()) {
        e.preventDefault()
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellido').value
        let cedula = document.getElementById('cedula').value
        let email = document.getElementById('email').value
        let direccion = document.getElementById('direccion').value

        const validateCedula = tabla.findIndex((t) => t.cedula === cedula) == -1

        if (validateCedula) {
            cuerpotabla.innerHTML += `<tr>
                <th scope="row">${i+1}</th>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${cedula}</td>
                <td>${email}</td>
                <td>${direccion}</td>
            </tr>`

            i++;

            nuevo = {
                nombre: nombre,
                apellido: apellido,
                cedula: cedula,
                email: email,
                direccion: direccion
            }

            tabla.push(nuevo)

        } else {
            alert('La cedula que intenta registrar ya existe.')
        }
        form.classList.add('was-validated')
    }
    

    
}
