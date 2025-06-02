import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";

export default function cadastroTelefone(cliente: Cliente){
    let entrada = new Entrada()

    let DDD = entrada.receberTexto(`Digite o seu DDD: `);
    let numeroTelefone = entrada.receberTexto(`Digite seu número de telefone: `);
    let telefone = new Telefone(DDD, numeroTelefone)
    cliente.adicionarTelefone(telefone)
}