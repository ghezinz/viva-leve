// Scripts

// Função: quando o usuario clicar no botão voltar, ele irá retornar a home
function voltarParaHome() {
        window.location.href = "index.html";
      }
// Função: se o usuarío tentar comprar algum produto, ele será redirecionado para a página de cadastro, caso ele não esteja autenticado
function redirecionarParaCadastro() {
    alert("Você precisa se cadastrar para realizar compras.");
        window.location.href = "cadastro.html";
      }
       
  