
import { CambioConverterAdapter } from '../adapter/CambioConverterAdapter';
import { Cotacao } from '../models/Cotacao';
import { CambioConverterRepository } from '../repository/CambioConverterRepository';
import { CambioConverter } from './CambioConverter';

const cotacao = {
    "USDBRL": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Comercial",
        "high": "5.20",
        "low": "5.10",
        "varBid": "0.05",
        "pctChange": "0.98",
        "bid": "5.15",
        "ask": "5.20",
        "timestamp": "1634567890",
        "create_date": "2021-10-18 10:00:00"
    }
};

const cotacaoMock = {
    "error": null,
    "success": [
        {
            "USDBRL": {
                "code": "USD",
                "codein": "BRL",
                "name": "Dólar Comercial",
                "high": "5.20",
                "low": "5.10",
                "varBid": "0.05",
                "pctChange": "0.98",
                "bid": "5.15",
                "ask": "5.20",
                "timestamp": "1634567890",
                "create_date": "2021-10-18 10:00:00"
            }
        }
    
    ]
}

const makeRepositoryStub = (): CambioConverterRepository => {
    class CambioConverterStub implements CambioConverterRepository {
        add (cotacao: any) {
            return {
                success: true,
                error: null
            }
        }
        getCotation(code: string){
            return {
                success: [cotacao],
                error: null
              }
        }
        update(cotacao: Cotacao){
            return {
                success: true,
                error: null
            }
        }
        delete(code: string){
            return {
                success: true,
                error: null
            }
        }
    }
    return new CambioConverterStub()
}

describe('CambioConverter with mock', () => {
    describe('Testing getCotacoes', () => {
        test('Should return a success', async () => {
            const repositoryStub = makeRepositoryStub();
            const cambioConverter = new CambioConverter(repositoryStub);
            const response = cambioConverter.getCotacoes('USD');
            expect(response).toEqual(cotacaoMock);
        })
    });
});

describe('CambioConverter without mock', () => {
    describe('Testing add', () => {
        test('Should return a success', async () => {
            const cambioConverter = new CambioConverterAdapter();
            const response = cambioConverter.add(cotacao);
        });
    });
});