import Servico from "../src/modelo/servico";
import Produto from "../src/modelo/produto";

export default class TabelaSelecao{
    public static selecionarProduto(produtos: Produto[]): Produto | null{
        if(produtos.length === 0){
            console.log("nenhum produto está disponível!");
            return null;
        }
        console.log("\nProdutos disponíveis:");
        produtos.forEach((produtos, index) =>{
            console.log(`${index +1} - ${produtos.nome} (R$${produtos.valor.toFixed(2)})`);
        });
        const entrada = require("prompt-sync")();
        const escolha = Number(entrada("Digite um número e escolha o produto desejado: "));

        if(escolha >= 1 && escolha <= produtos.length){
            return produtos[escolha -1];
        }else{
            console.log("Opção inválida!");
            return null;
        }
    }
    public static selecionarServico(servicos: Servico[]): Servico | null {
        if(servicos.length === 0){
            console.log("Nenhum serviço está disponível!");
            return null;
        }
        console.log("\nServiços disponíveis: ");
        servicos.forEach((servico, index) =>{
            console.log(`${index +1} - ${servico.nome} (R$${servico.valor.toFixed(2)})`);
        });
        const entrada = require("prompt-sync")();
        const escolha = Number(entrada("Digite um número e escolha o serviço desejado: "));

        if(escolha >= 1 && escolha <= servicos.length){
            return servicos[escolha -1];
        }else{
            console.log("A opção digitada é inválida!");
            return null;
        }
    }
}