import { Empresa } from "./empresa";

export interface Investido{
    investido: {
        id: number
        name: string
        cnpj: string
        patrimonio: number
        qtdCotasTotal: number
    }
    qtdCotas: number
}