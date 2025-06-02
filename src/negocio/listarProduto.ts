import Produto from "../modelo/produto";
import Listar from "./listar";

export default class ListarProduto extends Listar{
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
    }
    public listar(): void {
        if(this.produtos.length === 0){
            console.log("Nenhum produto foi encontrado!");
            return;
        }
        console.log(`A lista de produtos está disponível: `);
        this.produtos.sort((a,b) => a.nome.localeCompare(b.nome));
        this.produtos.forEach(produto =>{
            console.log(`${produto.nome} (R$${produto.valor.toFixed(2)})`);
        });
        console.log(`\n`);
    }
}