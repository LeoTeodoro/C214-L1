import { Cotacao } from '../../models/Cotacao'

export interface CambioConverterInt {
    addCotacao: (cotacao: Cotacao) => string | Error
    getCotacoes: (code: string) => Cotacao [] | string | unknown
    updateCotacao: (cotacao: Cotacao) => void
    removeCotacao: (code: string) => void
}