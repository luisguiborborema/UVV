// Espera o documento carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o botão e o menu de navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Verifica se os elementos existem na página
    if (menuToggle && nav) {
        
        // Adiciona um "ouvidor de clique" no botão
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no elemento <nav>
            nav.classList.toggle('active');
        });
    }

    // Validação do Formulário de Contato
    const contactForm = document.querySelector('.form-contato');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            // Pega os valores dos campos obrigatórios
            const nome = document.querySelector('#nome').value;
            const email = document.querySelector('#email').value;
            const mensagem = document.querySelector('#mensagem').value;

            // Verifica se estão vazios
            if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                
                // Impede o envio do formulário
                event.preventDefault(); 
                
                // Alerta o usuário
                alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).');
            }
        });
    }
});
