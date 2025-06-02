import Editar from "./editar";
import Produto from "../modelo/produto";

export default class EditarProdutos extends Editar<Produto>{
    public editar(produto: Produto): void{
        console.log(`\nEditar informações do produto`);

        const opcoes = ["Nome", "Valor"];
        const escolha = this.receberEscolha(opcoes);

        switch(escolha){
            case 1:
                const nome = this.entrada.receberTexto(`Digite o novo nome do produto: `);
                produto.nome = nome;
                console.log(`\nEdição de nome concluida com êxito!`);
                break;
            case 2:
                const valor = this.entrada.receberNumero(`Digite o novo valor do produto: `);
                produto.valor = valor;
                console.log(`\nO valor do produto foi alterado com êxito!`);
                break;
            default:
                console.log("Não consegui identificar a opção digitada!");
                break;
        }
    }
}