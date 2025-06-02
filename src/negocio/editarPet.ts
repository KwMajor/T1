import Editar from "./editar";
import Pet from "../modelo/pet";

export default class EditarPet extends Editar<Pet>{
    public editar(pet: Pet): void {
        console.log("O que você deseja editarno seu pet?");
        const opcoes = ["Nome", "Espécie", "Raça", "Gênero"];
        const escolha = this.receberEscolha(opcoes);

        switch(escolha){
            case 1:
                const nome = this.entrada.receberTexto(`Digite o novo nome do seu pet: `);
                pet.setNome(nome);
                console.log("\nEdição de nome concluida com êxito!");
                break;
            case 2:
                const especie = this.entrada.receberTexto(`Digite a nova espécie do seu pet: `);
                pet.setEspecie(especie);
                console.log("\nEdição de espécie concluida com êxito!");
                break;
            case 3:
                const raca = this.entrada.receberTexto(`Digite a nova raça do seu pet: `);
                pet.setRaca(raca);
                console.log("\nEdição de raça concluida com êxito!");
                break;
            case 4:
                const sexo = this.entrada.receberTexto(`Digite o novo sexo do seu pet (M/F): `);
                pet.setSexo(sexo);
                console.log("\nEdição realizada com êxito!");
                break;
            default:
                console.log("Não indentifiquei a opção inserida!");
        }
    }
}