import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    public valorGasto: number
    public quantidadeTotalConsumida: number
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
        this.valorGasto = 0
        this.quantidadeTotalConsumida = 0
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public get getPets(): Array<Pet>{
        return this.pets
    }

    public adicionarPet(pet: Pet){
        this.pets.push(pet)
    }

    public removerPet(pet: Pet): boolean {
        const index = this.pets.indexOf(pet);
        if(index !== -1) {
            this.pets.splice(index, 1);
            console.log(`Pet ${pet.getNome} foi removido com êxito!`);
            return true;
        }else{
            console.log(`O pet ${pet.getNome} não foi encontrado!`);
            return false;
        }
    }

    public adicionarRG(rg: RG) {
        this.rgs.push(rg)
    }

    public removerRG(rg: RG): boolean{
        const index = this.rgs.findIndex((r) => r.getValor === rg.getValor);
        if(index !== -1){
            this.rgs.splice(index, 1);
            console.log(`O RG ${rg.getValor} foi removito com êxito!`);
            return true;
        }else{
            console.log(`O RG ${rg.getValor} não foi encontrado!`);
            return false;
        }
    }

    public adicionarTelefone(telefone: Telefone){
        this.telefones.push(telefone)
    }

    public removerTelefone(telefone: Telefone): boolean{
        const index = this.telefones.findIndex(
            (t) => t.getDDD ===telefone.getDDD && t.getNumero === telefone.getNumero
        );
        if(index !== -1){
            this.telefones.splice(index, 1);
            console.log(`O telefone (${telefone.getDDD}) ${telefone.getNumero} foi removido com êxito!`);
            return true;
        }else{
            console.log(`O telefone (${telefone.getDDD}) ${telefone.getNumero} não foi encontrado!`);
            return false;
        }
    }

    public consumirProduto(produto: Produto){
        this.produtosConsumidos.push(produto)
    }

    public atribuirServico(servico: Servico){
        this.servicosConsumidos.push(servico)
    }
}