export class CambioConverter {
    async buscarCotacao(moedas: string) {
        try {
            const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${moedas}`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Ocorreu um erro ao buscar a cotação:', error);
            return error;
        }
    }
}