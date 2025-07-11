import Cliente from "../modelo/cliente";
import Listar from "./listar";

interface Atributos{
    nome: string,
    quantidade: number
}
export default class ListarMaisConsumidos extends Listar{
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }
    public listar(): void {
        console.log("\nLista de serviços e produtos mais consumidos: ");

        let produtoMaisConsumidos: Atributos[] = [];
        let servicosMaisConsumidos: Atributos[] = [];

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto =>{
                this.incrementarContagem(produtoMaisConsumidos, produto.nome);
            });

            cliente.getServicosConsumidos.forEach(servico =>{
                this.incrementarContagem(servicosMaisConsumidos, servico.nome);
            });
        });
        produtoMaisConsumidos.sort((a,b) => b.quantidade - a.quantidade);
        servicosMaisConsumidos.sort((a,b) => b.quantidade - a.quantidade);

        this.mostrarListaMaisConsumidos("Produtos", produtoMaisConsumidos);
        this.mostrarListaMaisConsumidos("Serviços", servicosMaisConsumidos);
    }
    private incrementarContagem(lista: Atributos[], nome: string): void{
        const indice = lista.findIndex(item => item.nome === nome);
        if(indice !== -1){
            lista[indice].quantidade++;
        }else{
            lista.push({ nome, quantidade: 1});
        }
    }
    private mostrarListaMaisConsumidos(tipo: string, lista: Atributos[]): void{
        console.log(`\n${tipo} mais utilizados: `);
        for(let i = 0; i < Math.min(lista.length, 5); i++){
            const item = lista[i];
            const vozOuVezes = item.quantidade === 1? "vez" : "vezes";
            console.log(`${i+1} - ${item.nome}: ${item.quantidade} ${vozOuVezes}.`);
        }
    }
}