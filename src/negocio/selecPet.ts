import Pet from "../modelo/pet";

export default class SelecPet{
    private pets: Array<Pet>;

    constructor(pets: Array<Pet>){
        this.pets = pets;
    }
    public selecionar(nome: string): Pet | null{
        const petSelecionado = this.pets.find(pet => nome === pet.getNome);
        return petSelecionado || null;
    }
}