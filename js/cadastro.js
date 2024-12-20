// Seleciona os elementos do formulário
const formCadastro = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');

// Função para validar e salvar o cadastro
formCadastro.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne o envio padrão do formulário

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  // Validações básicas
  if (!nome || !email || !senha || !confirmarSenha) {
    exibirMensagem('Por favor, preencha todos os campos.', 'red');
    return;
  }

  if (senha !== confirmarSenha) {
    exibirMensagem('As senhas não conferem.', 'red');
    return;
  }

  // Salva os dados no localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioExistente = usuarios.find(user => user.email === email);

  if (usuarioExistente) {
    exibirMensagem('Este e-mail já está cadastrado.', 'red');
    return;
  }

  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  exibirMensagem('Cadastro realizado com sucesso!', 'green');
  formCadastro.reset(); // Limpa o formulário
});

// Função para exibir mensagens de erro ou sucesso
function exibirMensagem(texto, cor) {
  mensagem.textContent = texto;
  mensagem.style.color = cor;
}
