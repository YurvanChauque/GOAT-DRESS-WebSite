document.addEventListener('DOMContentLoaded', function() {
    // SEU NÚMERO DE WHATSAPP AQUI.
    // FORMATO CORRETO: Código do país + DDD (se houver) + número. SEM ESPAÇOS, HÍFENS OU PARÊNTESES.
    // Exemplo para Moçambique (258) com o número 850374052: '258850374052'
    const whatsappNumber = '258857965678'; // Confirme se este é o número exato e sem formatação

    // 1. Funcionalidade para os botões de PEDIDO de PRODUTO
    const productWhatsappButtons = document.querySelectorAll('.btn-whatsapp-produto');

    productWhatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.product;
            const form = this.closest('form');

            let selectedSize = '';
            if (form.elements.tamanho) {
                selectedSize = form.elements.tamanho.value;
            }

            let selectedColor = '';
            if (form.elements.cor) {
                selectedColor = form.elements.cor.value;
            }

            let personalizationText = '';
            if (form.elements.personalizacao) {
                personalizationText = form.elements.personalizacao.value.trim();
            }

            // Monta a mensagem completa para o WhatsApp
            let message = `Olá, gostaria de fazer um pedido de:\n`;
            message += `Produto: ${productName}\n`;
            
            if (selectedSize) {
                message += `*Tamanho:* ${selectedSize}\n`;
            }
            if (selectedColor) {
                message += `*Cor:* ${selectedColor}\n`;
            }
            if (personalizationText) {
                message += `*Personalização:* ${personalizationText}\n`;
            }
            
            message += `\nAguardo seu contato para finalizar a compra!`;

            // CRÍTICO: Codifica a mensagem para que ela seja lida corretamente pela URL do WhatsApp
            const encodedMessage = encodeURIComponent(message);

            // Abre o WhatsApp com a mensagem pré-preenchida
            // Verifica se o número e a mensagem codificada estão corretos antes de abrir
            if (whatsappNumber && encodedMessage) {
                window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            } else {
                console.error("Erro: Número do WhatsApp ou mensagem não estão definidos corretamente.");
                alert("Não foi possível enviar o pedido. Por favor, tente novamente ou entre em contato direto.");
            }
        });
    });

    // 2. Funcionalidade para o BOTÃO FLUTUANTE de AJUDA GERAL
    const helpWhatsappButton = document.getElementById('btn-whatsapp-ajuda');

    if (helpWhatsappButton) { 
        helpWhatsappButton.addEventListener('click', function(event) {
            event.preventDefault();

            const helpMessage = `Olá, vim do site da GOAT Dress e gostaria de uma ajuda.`;
            const encodedHelpMessage = encodeURIComponent(helpMessage);
            
            if (whatsappNumber && encodedHelpMessage) {
                window.open(`https://wa.me/${whatsappNumber}?text=${encodedHelpMessage}`, '_blank');
            } else {
                console.error("Erro: Número do WhatsApp ou mensagem de ajuda não estão definidos corretamente.");
                alert("Não foi possível solicitar ajuda. Por favor, tente novamente ou entre em contato direto.");
            }
        });
    }

    // 3. Script para atualizar o ano no rodapé automaticamente
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }