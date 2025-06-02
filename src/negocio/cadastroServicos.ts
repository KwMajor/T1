import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServicos extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nCadastro de serviços`);

        let nomeServico = this.entrada.receberTexto("Digite o nome do serviço: ")
        let valorServico = this.entrada.receberNumero("Digite o valor do serviço: ")
        let servico = new Servico()

        servico.nome = nomeServico
        servico.valor = valorServico

        this.servicos.push(servico)
        console.log(`\nCadastro realizado com êxito!`);
    }
}