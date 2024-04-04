import { Cotacao } from "../models/Cotacao";
type Response = {
    success: unknown,
    error: unknown
}
export interface CambioConverterRepository {
    add (cotacao: Cotacao): Response
    getCotation (code: string): Response
    update (cotacao: Cotacao): Response
    delete (code: string) : Response
}