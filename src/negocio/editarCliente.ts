import Editar from "./editar";
import Cliente from "../modelo/cliente";

export default class EditarCliente extends Editar<Cliente>{
    public editar(cliente: Cliente): void{
        console.log("\nEditar as informações do cliente");

        const opcoes = ["Nome", "Nome social"];
        const escolha = this.receberEscolha(opcoes);

        switch(escolha){
            case 1:
                const nome = this.entrada.receberTexto("Digite o nome do cliente: ");
                cliente.nome = nome;
                console.log(`\nA edição foi realizada com sucesso!`);
                break;
            case 2:
                const nomeSocial = this.entrada.receberTexto('Digite o nome social do cliente: ');
                cliente.nomeSocial = nomeSocial;
                console.log("\nA edição foi realizada com sucesso!");
                break;
            default:
                console.log("A opção inserida não foi identificada!");
                break;

        }
    }
}