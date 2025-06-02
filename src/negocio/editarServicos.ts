import Editar from "./editar";
import Servico from "../modelo/servico";

export default class EditarServicos extends Editar<Servico>{
    public editar(servico: Servico): void{
        console.log(`\nEditar informações de serviços`);

        const opcoes = ["Nome", "Preço"];
        const escolha = this.receberEscolha(opcoes);

        switch(escolha){
            case 1:
                const nome = this.entrada.receberTexto(`Digite o novo nome do serviço: `);
                servico.nome = nome;
                console.log(`\nNome do serviço alterado com êxito!`);
                break;

                case 2:
                    const valor = this.entrada.receberNumero(`Digite o novo valor do serviço: `);
                    servico.valor = valor;
                    console.log(`\nValor do serviço alterado com êxito!`);
                    break;
                default:
                    console.log("Opção inválida!");
                    break;
        }
    }
}