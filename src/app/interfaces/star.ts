import { PersonajeStar } from './personaje-star';

export interface Star {
    "count": string,
    "next": string,
    "previous": string,
    "results": PersonajeStar[]
}
