interface vehicle {
    modelo: number;
    year: number;
    color: string;
}

interface car extends vehicle {
    vehicode: string;
    multas: number;
}

interface Motorcycle extends vehicle{
    soat: number;
    tecno:string;
}

class Renta implements car {
    modelo: number;
    year: number;
    color: string;
    vehicode: string;
    multas: number;

    constructor(modelo : number, year: number, color: string, vehicode: string, multas: number){
    this.modelo = modelo;
    this.year = year;
    this.color = color;
    this.vehicode = vehicode;
    this.multas = multas;
    }

}

let rentaUsuario =  new Renta ( 2025, 2026, "Rojo", "whdeshhfj", 4)
console.log (`Renta encontrada:
    No. Modelo ${rentaUsuario.modelo},
    Year ${rentaUsuario.year},
    Codigo de vehiculo ${rentaUsuario.vehicode}
    multas ${rentaUsuario.multas}

    `
)