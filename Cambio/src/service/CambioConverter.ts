import { Cotacao } from "../models/Cotacao";
import { CambioConverterRepository } from '../repository/CambioConverterRepository';
import { CambioConverterInt } from './interfaces/CambioConverter';
export class CambioConverter implements CambioConverterInt{
    private repository: CambioConverterRepository;
    constructor(cambioConverterRepository: CambioConverterRepository){
        this.repository = cambioConverterRepository;
    }

    addCotacao(cotacao: Cotacao){
        const missingProperties = ['code', 'codein', 'name', 'high', 'low', 'varBid', 'pctChange', 'bid', 'ask', 'timestamp', 'create_date']
        .filter((prop) => !Object.keys(cotacao).includes(prop));
        try{
            if (missingProperties.length > 0) {
                return 'Missing properties in task object'
            }
            const response = this.repository.add(cotacao);
            if (response.error) {
                return 'Falha ao criar cotacao'
              }
            return 'Cotacao adicionada com sucesso';
        } catch (error) {
            return new Error(JSON.stringify(error));
        }
    }

    getCotacoes(code : string) {
        const response = this.repository.getCotation(code);
        if (response.error) {
            return 'Falha ao retornar a cotacao'
          }
          return response
    }

    updateCotacao(cotacao: Cotacao) {
        this.repository.update(cotacao);
    }

    async removeCotacao(code : string) {
        this.repository.delete(code);
    }
}

