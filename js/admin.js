function manageProducts() {
    window.location.href = "gerenciar_produtos.html";
}
function manageUsers() {
    window.location.href = "gerenciar_usuarios.html";
}
function viewStats() {
    alert("Total de usuários: 100"); // Simular estatísticas
}

function voltarParaHome() {
    window.location.href = "index.html";
  }



// Verificar o token para determinar se é admin
const token = sessionStorage.getItem('authenticated');
if (token) {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar JWT
    if (payload.role === 'admin') {
        const adminLink = document.createElement('a');
        adminLink.href = 'admin.html';
        adminLink.textContent = 'Painel';
        document.querySelector('.menu').appendChild(adminLink);
    }
}
