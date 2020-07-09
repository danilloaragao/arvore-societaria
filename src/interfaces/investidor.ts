import { Empresa } from "./empresa";

export interface Investidor{
    investidor: {
        id: number
        name: string
        cnpj: string
        patrimonio: number
        qtdCotasTotal: number
    }
    qtdCotas: number
}