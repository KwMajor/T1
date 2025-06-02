import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default function cadastrarPets(cliente: Cliente){
    let entrada = new Entrada();
    let nomePet = entrada.receberTexto("Digite o nome do seu pet: ");
    let especiePet = entrada.receberTexto("Digite a especie do seu pet: ");
    let racaPet = entrada.receberTexto("Digite a raça do seu pet: ");

    let sexoPet = "";
    while(true){
        sexoPet = entrada.receberTexto("Digite o sexo do seu pet (M/F): ").toLocaleLowerCase();
        if(sexoPet === 'm' || sexoPet === 'f'){
            break;
        }else{
            console.log("Esse gênero não existe!");
        }
    }

    let novoPet = new Pet(nomePet, racaPet, sexoPet === 'm'? 'Macho' : 'Fêmea', especiePet);
    cliente.adicionarPet(novoPet);

}