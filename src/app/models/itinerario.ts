import { Coord } from "./coord";

export class Itinerario {
    idlinha : number;
    nome : string;
    codigo : number;
    coord : Array<Coord>;

    constructor(idlinha : number, nome : string, codigo : number, coord : Array<Coord>)
    {
        this.idlinha = idlinha;
        this.nome = nome;
        this.codigo = codigo;
        this.coord = coord;
    }
}
