class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es ${this.nombre} con direccion en ${this.direccion} y telefono ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo
    }

    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }

}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;

    }

    get nombreMascota() {
        return this._nombreMascota
    }

    set nombreMascota(nuevo_nombreMascota) {
        this._nombreMascota = nuevo_nombreMascota;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nueva_enfermedad) {
        this._enfermedad = nueva_enfermedad;
    }
}



let boton = document.getElementById("boton");


let registro = () => {

    let nombre = document.getElementById("propietario").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipo = document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;

    if (tipo == "perro") {
        let perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        return perro;
    } else if (tipo == "gato") {
        let gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
        return gato;
    } else {
        let conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
        return conejo;
    }
}



let mostrar = (e) => {
    e.preventDefault()
    const dataMascota = registro()
    const nombreMascota = dataMascota.nombreMascota;
    const tipo = dataMascota.tipo;
    const enfermedad = dataMascota.enfermedad;
    document.getElementById('lista').innerHTML = `<li>${dataMascota.datosPropietario()}</li><li>${dataMascota.tipo}, mientras que el nombre de la mascota es ${nombreMascota} y la enfermedad es ${enfermedad}</li>`;

}



boton.addEventListener("click", mostrar)