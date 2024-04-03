import { CambioConverter } from './CambioConverter';

describe('CambioConverter', () => {
    describe('Testing get', () => {
        test('Should return a valid json', async () => {
            const cambioConverter = new CambioConverter();
            const data = await cambioConverter.buscarCotacao('USD-BRL');
            expect(data).toEqual(expect.objectContaining({
                'USDBRL': expect.objectContaining({
                    code: 'USD',
                    codein: 'BRL',
                    name: 'Dólar Americano/Real Brasileiro',
                    high: expect.any(String),
                    low: expect.any(String),
                    varBid: expect.any(String),
                    pctChange: expect.any(String),
                    bid: expect.any(String),
                    ask: expect.any(String),
                    timestamp: expect.any(String),
                    create_date: expect.any(String)
                })
            }));
        });
    });
});