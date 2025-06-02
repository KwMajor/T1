import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }

    public removerCliente(cliente: Cliente): boolean{
        const index = this.clientes.indexOf(cliente);
        if(index !== -1){
            this.clientes.splice(index, 1);
            console.log(`O cliente '${cliente.nome}' foi removido com êxito!`);
            return true;
        }else{
            console.log(`Este cliente não foi encontrado!`);
            return false;
        }
    }

    public removerServico(servico: Servico): boolean{
        const index = this.servicos.indexOf(servico);
        if(index !== -1){
            this.produtos.splice(index, 1);
            console.log(`O Serviço '${servico.nome}' foi removido com êxito!`);
            return true;
        }else{
            console.log(`Este produto não foi encontrado!`);
            return false;
        }
    }

    public removerProduto(produto: Produto): boolean {
        const index = this.produtos.indexOf(produto);
        if(index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`O produto '${produto.nome}' foi removido com êxito!`);
            return true;
        }else{
            console.log(`O produto não foi encontrado!`);
            return false;
        }
    }
}