import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";

export default function cadastroRG(cliente: Cliente){
    let entrada = new Entrada()

    let valorRg = entrada.receberTexto(`Digite o número do seu RG: `)
    let dataRG = entrada.receberTexto(`Digite a data de emissão do RG: `);
    let estadoEmissao = entrada.receberTexto(`Digite o estado em que seu RG foi emitido, no padrão dd/mm/yyyy: `);

    let parteDataRG = dataRG.split('/')
    let anoRG = new Number(parteDataRG[2].valueOf()).valueOf()
    let mesRG = new Number(parteDataRG[1].valueOf()).valueOf()
    let diaRg = new Number(parteDataRG[0].valueOf()).valueOf()

    let dataEmissao = new Date(anoRG, mesRG, diaRg)
    let rg = new RG(valorRg, dataEmissao, estadoEmissao)
    cliente.adicionarRG(rg)
}