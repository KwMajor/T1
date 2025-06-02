import Cliente from "../modelo/cliente";
import Listar from "./listar";

export default class ListarValorClientes extends Listar{
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }
    public listar(): void{
        console.log("\nNossos 5 maiores consumidores em valor: ");
        const clientesOrdenados = [...this.clientes].sort((a, b) => b.valorGasto - a.valorGasto);
        const clientes5 = clientesOrdenados.slice(0,5);
        clientes5.forEach((cliente, indice) =>{
            console.log(`${indice +1} - ${cliente.nome}: R$${cliente.valorGasto.toFixed(2)} gasto com serviços e produtos.`);

        });
    }
}