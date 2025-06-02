import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastrarProduto from "../negocio/cadastrarProduto";
import CadastroServicos from "../negocio/cadastroServicos";
import EditarCliente from "../negocio/editarCliente";
import EditarPet from "../negocio/editarPet";
import EditarProdutos from "../negocio/editarProdutos";
import EditarServicos from "../negocio/editarServicos";
import ListarClientes from "../negocio/listarCliente";
import ListarProduto from "../negocio/listarProduto";
import ListarServico from "../negocio/listarServico";
import TabelaSelecao from "../../utils/tabelaSelecao";
import ListarQuantidadeClientes from "../negocio/listarQuantidadeClientes";
import ListarValorClientes from "../negocio/listarValorClientes";
import ListarMaisConsumidos from "../negocio/listarMaisconsumidos";
import SelecCliente from "../negocio/selecCliente";
import SelecPet from "../negocio/selecPet";
import cadastroRG from "../negocio/cadastroRg";
import cadastrarPets from "../negocio/cadastrarPets";
import cadastroTelefone from "../negocio/cadatroTelefones";
import ListarPorEspecieRaca from "../negocio/listarRacaEspecieQuantidades";

console.log(`\nBem-vindo a PetLovers!`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
  console.log("\n1 - Gerenciar os clientes");
  console.log("2 - Gerenciar os serviços");
  console.log("3 - Gerenciar os produtos");
  console.log("\nInformações de gerenciamento");
  console.log("4 - Listar serviços e produtos mais consumidos");
  console.log("5 - Listar serviços e produtos mais consumidos por espécie e raça");
  console.log("6 - 5 clientes que mais consumiram em valor");
  console.log("7 - 10 clientes que mais consumiram em quantidade");
  console.log(`\n0. Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Escolha uma opção: `);
  console.clear();

  switch (opcao) {
    // --Cliente--
    case 1:
    let opcaoGerenciamento: number;

    do {
        console.log("\n-- Gerenciamento de Clientes --");
        console.log("1 - Cadastrar clientes");
        console.log("2 - Selecionar clientes");
        console.log("3 - Listar clientes")
        console.log("0 - Retornar ao menu principal");

        opcaoGerenciamento = entrada.receberNumero("Escolha uma opção: ");
        console.clear();

        switch (opcaoGerenciamento) {
            case 1:
                let cadastro = new CadastroCliente(empresa.getClientes);
                cadastro.cadastrar();
                break;

            case 2:
                let cpfSelecionado = entrada.receberTexto("Digite o CPF do cliente para selecionar: ");
                let selecionarCliente = new SelecCliente(empresa.getClientes);
                let clienteSelecionado = selecionarCliente.selecionar(cpfSelecionado);

                if (clienteSelecionado) {
                    let opcaoCliente: number;
                    let clienteDeletado = false;

                    do {
                        console.log(`\nGerenciar Cliente: ${clienteSelecionado.nome}`);
                        console.log("1 - RGs");
                        console.log("2 - Telefones");
                        console.log("3 - Pets");
                        console.log("4 - Editar informações");
                        console.log("5 - Excluir cliente");
                        console.log("0 - Voltar");

                        opcaoCliente = entrada.receberNumero("Escolha uma opção: ");
                        console.clear();

                        switch (opcaoCliente) {
                          case 1:
                              let opcaoRg: number;
          
                              do {
                                  console.log("\nRGs do cliente:");
                                  if (clienteSelecionado.getRgs.length > 0) {
                                      clienteSelecionado.getRgs.forEach((rg) => {
                                          console.log(`${rg.getValor} (${rg.getDataEmissao.toLocaleDateString()})`);
                                      });
                                  } else {
                                      console.log("Nenhum RG foi cadastrado.");
                                  }
                                  console.log("1 - Adicionar RG");
                                  console.log("2 - Excluir RG");
                                  console.log("0 - Voltar");
          
                                  opcaoRg = entrada.receberNumero("Escolha uma opção: ");
                                  console.clear();
          
                                  switch (opcaoRg) {
                                      case 1:
                                          cadastroRG(clienteSelecionado);
                                          console.log("\nO RG foi adicionado com êxito!");
                                          break;
          
                                      case 2:
                                          let rgValor = entrada.receberTexto("Digite o número do RG que deseja remover: ");
                                          let rg = clienteSelecionado.getRgs.find((r) => r.getValor === rgValor);
          
                                          if (rg) {
                                              clienteSelecionado.removerRG(rg);
                                          } else {
                                              console.log("\nEsse RG não foi encontrado.");
                                          }
                                          break;
          
                                      case 0:
                                          console.log("\nRetornando ao menu do cliente");
                                          break;
          
                                      default:
                                          console.log("Opção inválida.");
                                  }
                              } while (opcaoRg !== 0);
                              break;
          
                          case 2:
                              let opcaoTelefone: number;
          
                              do {
                                  console.log("\nTelefones do cliente:");
                                  if (clienteSelecionado.getTelefones.length > 0) {
                                      clienteSelecionado.getTelefones.forEach((telefone) => {
                                          console.log(`(${telefone.getDDD}) ${telefone.getNumero}`);
                                      });
                                  } else {
                                      console.log("Nenhum telefone cadastrado.");
                                  }
                                  console.log("1 - Adicionar Telefone");
                                  console.log("2 - Excluir Telefone");
                                  console.log("0 - Voltar");
          
                                  opcaoTelefone = entrada.receberNumero("Escolha uma opção: ");
                                  console.clear();
          
                                  switch (opcaoTelefone) {
                                      case 1:
                                          cadastroTelefone(clienteSelecionado);
                                          console.log("\nTelefone adicionado com êxito!");
                                          break;
          
                                      case 2:
                                          let ddd = entrada.receberTexto("Digite o DDD do telefone que vai ser removido: ");
                                          let numero = entrada.receberTexto("Digite o número do telefone que vai ser removido: ");
                                          let telefone = clienteSelecionado.getTelefones.find(
                                              (t) => t.getDDD === ddd && t.getNumero === numero
                                          );
          
                                          if (telefone) {
                                              clienteSelecionado.removerTelefone(telefone);
                                          } else {
                                              console.log("\nTelefone não encontrado.");
                                          }
                                          break;
          
                                      case 0:
                                          console.log("\nRetornando ao menu do cliente");
                                          break;
          
                                      default:
                                          console.log("Opção inválida.");
                                  }
                              } while (opcaoTelefone !== 0);
                              break;
                            
                            case 3:
                                let opcaoPet: number;

                                do {
                                  let nomesPets = clienteSelecionado.getPets.map((pet) => pet.getNome).join(", ");
                                  console.log(`\nGerenciar pets: [${nomesPets || "Nenhum pet cadastrado"}]`);
                                  console.log("1 - Adicionar pet");
                                  console.log("2 - Selecionar pet")
                                  console.log("0 - Voltar");

                                  opcaoPet = entrada.receberNumero("Escolha uma opção: ");
                                  console.clear();

                                  switch(opcaoPet) {
                                      case 1:
                                        cadastrarPets(clienteSelecionado);
                                        console.log(`\nPet adicionado com êxito!`);
                                        break;

                                      case 2:
                                        let pet = entrada.receberTexto("Digite o nome do pet: ");
                                        let selecionaPet = new SelecPet(clienteSelecionado.getPets);
                                        let petSelecionado = selecionaPet.selecionar(pet);

                                        if (petSelecionado) {
                                          let opcaoPetSelecionado: number;
                                          let petDeletado = false;

                                          do {
                                            console.log(`\nOpções:`);
                                            console.log("1 - Comprar produto");
                                            console.log("2 - Selecionar servico");
                                            console.log("3 - Editar informações");
                                            console.log("4 - Excluir pet");
                                            console.log("0 - Voltar");

                                            opcaoPetSelecionado = entrada.receberNumero("Escolha uma opção: ");
                                            console.clear();

                                            switch (opcaoPetSelecionado) {
                                              case 1:
                                                const produtoSelecionado = TabelaSelecao.selecionarProduto(empresa.getProdutos);
                                                if (produtoSelecionado) {
                                                  clienteSelecionado.consumirProduto(produtoSelecionado);
                                                  clienteSelecionado.valorGasto += produtoSelecionado.valor
                                                  petSelecionado.consumirProduto(produtoSelecionado);
                                                  console.log("Produto adicionado com êxito!");
                                                }
                                                break;

                                              case 2:
                                                const servicoSelecionado = TabelaSelecao.selecionarServico(empresa.getServicos);
                                                if (servicoSelecionado) {
                                                  clienteSelecionado.atribuirServico(servicoSelecionado);
                                                  clienteSelecionado.valorGasto += servicoSelecionado.valor
                                                  petSelecionado.atribuirServico(servicoSelecionado);
                                                  console.log("Serviço atribuído com êxito!");
                                                }
                                                break;

                                              case 3:
                                                let editarPet = new EditarPet();
                                                editarPet.editar(petSelecionado);
                                                break;

                                              case 4:
                                                if (clienteSelecionado.removerPet(petSelecionado)) {
                                                  petDeletado = true;
                                                }
                                                break;

                                              case 0:
                                                console.log("\nRetornando ao menu do cliente");

                                              default:
                                                console.log("Opção inválida.");
                                            }
                                          } while (opcaoPetSelecionado !== 0 && !petDeletado)

                                          if(petDeletado) break;
                                        } else {
                                            console.log("\nPet não encontrado.");
                                        }
                                  }
                                } while (opcaoPet !== 0);
                                break;

                            case 4:
                                let editor = new EditarCliente();
                                editor.editar(clienteSelecionado);
                                console.log("\nInformações editadas com êxito!");
                                break;

                            case 5:
                                if (empresa.removerCliente(clienteSelecionado)){
                                  clienteDeletado = true;
                                }
                                break;

                            case 0:
                                console.log("\nRetornando ao menu de gerenciamento de clientes");
                                break;

                            default:
                                console.log("Opção inválida.");
                        }
                    } while (opcaoCliente !== 0 && !clienteDeletado);

                    if(clienteDeletado) break;
                } else {
                    console.log("\nCliente não encontrado.");
                }
                break;

            case 3:
                let listagem = new ListarClientes(empresa.getClientes);
                listagem.listar();
                break;

            case 0:
                console.log("\nRetornando ao menu principal");
                break;

            default:
                console.log("Opção inválida.");
        }
    } while (opcaoGerenciamento !== 0);
    break;

    // --Serviço--
    case 2:
      let opcaoGerenciamentoServico: number;

      do {
        console.log("\nGerenciar Serviços");
        console.log("1 - Cadastrar serviço");
        console.log("2 - Editar serviço");
        console.log("3 - Excluir serviço");
        console.log("4 - Listar serviços");
        console.log("0 - Voltar ao menu principal");

        opcaoGerenciamentoServico = entrada.receberNumero("Escolha uma opção: ");
        console.clear();

        switch (opcaoGerenciamentoServico) {
          case 1:
              let cadastroServico = new CadastroServicos(empresa.getServicos);
              cadastroServico.cadastrar();
              break;

          case 2:
              let servicoEditar = TabelaSelecao.selecionarServico(empresa.getServicos);

              if (servicoEditar) {
                  let editarServico = new EditarServicos();
                  editarServico.editar(servicoEditar);
                  console.log("\nServiço editado com êxito!");
              } else {
                  console.log("\nServiço não encontrado.");
              }
              break;

          case 3:
              let servicoExcluir = TabelaSelecao.selecionarServico(empresa.getServicos);

              if (servicoExcluir) {
                  empresa.removerServico(servicoExcluir);
                  console.log("\nServiço excluído com êxito!");
              } else {
                  console.log("\nServiço não encontrado.");
              }
              break;

          case 4:
            let listagemServicos = new ListarServico(empresa.getServicos);
            listagemServicos.listar();
            break;

          case 0:
              console.log("\nRetornando ao menu principal");
              break;

          default:
              console.log("Opção inválida.");
        }
      } while (opcaoGerenciamentoServico !== 0)
      break;

    // --Produto--
    case 3:
      let opcaoGerenciamentoProduto: number;

      do {
          console.log("\nGerenciar Produtos");
          console.log("1 - Cadastrar produto");
          console.log("2 - Editar produto");
          console.log("3 - Excluir produto");
          console.log("4 - Listar produtos");
          console.log("0 - Voltar ao menu principal");

          opcaoGerenciamentoProduto = entrada.receberNumero("Escolha uma opção: ");
          console.clear();

          switch (opcaoGerenciamentoProduto) {
              case 1:
                  let cadastroProduto = new CadastrarProduto(empresa.getProdutos);
                  cadastroProduto.cadastrar();
                  break;

              case 2:
                  let produtoEditar = TabelaSelecao.selecionarProduto(empresa.getProdutos);

                  if (produtoEditar) {
                      let editarProduto = new EditarProdutos();
                      editarProduto.editar(produtoEditar);
                      console.log("\nProduto editado com êxito!");
                  } else {
                      console.log("\nProduto não encontrado.");
                  }
                  break;

              case 3:
                  let produtoExcluir = TabelaSelecao.selecionarProduto(empresa.getProdutos);

                  if (produtoExcluir) {
                      empresa.removerProduto(produtoExcluir);
                      console.log("\nProduto excluído com êxito!");
                  } else {
                      console.log("\nProduto não encontrado.");
                  }
                  break;

              case 4:
                  let listagemProdutos = new ListarProduto(empresa.getProdutos);
                  listagemProdutos.listar();
                  break;

              case 0:
                  console.log("\nRetornando ao menu principal");
                  break;

              default:
                  console.log("Opção inválida.");
          }
      } while (opcaoGerenciamentoProduto !== 0);
      break;

    // --Listagens--
    case 4:
      let listagemProdutoServicos = new ListarMaisConsumidos(empresa.getClientes);
      listagemProdutoServicos.listar();
      break;

    case 5:
      let listagemProdutoServicosRaca = new ListarPorEspecieRaca(empresa.getClientes);
      listagemProdutoServicosRaca.listar();
      break;

    case 6:
      let lista5 = new ListarValorClientes(empresa.getClientes);
      lista5.listar();
      break;

    case 7:
      let lista10 = new ListarQuantidadeClientes(empresa.getClientes);
      lista10.listar();
      break;

    case 0:
      execucao = false;
      console.log(`See you ;)`);
      break;

    default:
      console.log(`Operação não entendida :(`);
  }
}
