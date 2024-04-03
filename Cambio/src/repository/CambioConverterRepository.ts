import { Cotacao } from "../models/Cotacao";
type Response = {
    success: unknown,
    error: unknown
}
export interface CambioConverterRepository {
    getCotacao (moeda: string): Response
}