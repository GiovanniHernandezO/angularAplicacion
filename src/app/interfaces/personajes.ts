import { Personaje } from './personaje';

export interface Personajes {
    "info": {
        "count": number,
        "pages": number,
        "next": string,
        "prev": string
    },
    "results": Personaje[]
}
