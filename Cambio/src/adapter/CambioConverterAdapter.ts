import { CambioConverterRepository } from '../repository/cambioConverterRepository';

export class cambioConverterAdapter implements CambioConverterRepository {
    getCotacao(moeda: string) {
        try {
        return {
            success: true,
            error: null
        }
        } catch (error) {
        return {
            success: null,
            error: 'Cannot get cotacao'
        }
        }
    }
    }