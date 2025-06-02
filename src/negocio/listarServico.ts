import Servico from "../modelo/servico";
import Listar from "./listar";

export default class ListarServico extends Listar{
    private servicos: Array<Servico>;

    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
    }
    public listar(): void {
        if(this.servicos.length === 0){
            console.log("Nenhum serviço foi encontrado!");
            return;
        }
        console.log(`Lista de serviços que estão disponíveis:`);
        this.servicos.sort((a,b) => a.nome.localeCompare(b.nome));
        this.servicos.forEach(servico =>{
            console.log(`${servico.nome} (R$${servico.valor.toFixed(2)})`);
        });
        console.log(`\n`);
    }
}