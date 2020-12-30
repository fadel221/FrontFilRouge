import { Profil } from "./profil";

export interface User {
    id: number,
    nom: string,
    prenom: string,
    email: string,
    username: string,
    password: string,
    profil: Profil
}
