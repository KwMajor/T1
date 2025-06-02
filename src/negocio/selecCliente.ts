import Cliente from "../modelo/cliente";

export default class SelecCliente{
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>){
        this.clientes = clientes;
    }
    public selecionar(numeroCpf: string): Cliente | null {
        const clienteSelecionado = this.clientes.find(cliente => numeroCpf === cliente.getCpf.getValor);
        return clienteSelecionado || null;
    }
}