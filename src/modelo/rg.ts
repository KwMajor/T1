export default class RG {
    private valor: string
    private dataEmissao: Date
    private estadoEmissao: string
    constructor(valor: string, dataEmissao: Date, estadoEmissao: string) {
        this.valor = valor
        this.dataEmissao = dataEmissao
        this.estadoEmissao = estadoEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public get getestadoEmissao(): string {
        return this.estadoEmissao
    }
}