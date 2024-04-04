import { Cotacao } from "../models/Cotacao";
import { CambioConverterRepository } from '../repository/CambioConverterRepository';
export class CambioConverterAdapter implements CambioConverterRepository{
    private cotacoes: Cotacao[] = [];

    add(cotacao: Cotacao){
        try{
            this.cotacoes.push(cotacao);
            return {
                success: true,
                error: null
              }
        } catch (error) {
            return {
                success: null,
                error: 'Cannot add cotation'
              }
            
        }
    }
    getCotation(code: string){
        let indexForGet = -1;
        try{
            this.cotacoes.forEach((cotacaoFor, index) => {
                if (cotacaoFor.code === code) {
                    indexForGet = index;
                }
            });
            return {
                success: this.cotacoes[indexForGet],
                error: null
              }
        }
        catch (error) {
            return {
                success: null,
                error: 'Cannot update cotation'
              }
        }
    }
    update(cotacao: Cotacao){
        try{
            this.cotacoes.forEach((cotacaoFor, index) => {
                if (cotacaoFor.code === cotacao.code) {
                   this.cotacoes[index] = cotacao;
                }
            });
            return {
                success: true,
                error: null
            }
        }
        catch (error) {
            return {
                success: null,
                error: 'Cannot update cotation'
              }
        }
    }
    delete(code: string): { success: unknown; error: unknown; } {
        try{
            this.cotacoes.forEach((cotacaoFor, index) => {
                if (cotacaoFor.code === code) {
                    this.cotacoes.splice(index, 1);
                }
            });
            return {
                success: true,
                error: null
              }
        }
        catch (error) {
            return {
                success: null,
                error: 'Cannot delete cotation'
              }
        }
    }
}

