## Jogo do Número Secreto

Bem-vindo ao **Jogo do Número Secreto**, um projeto simples desenvolvido em HTML, CSS e JavaScript. Este jogo desafia o usuário a adivinhar um número secreto gerado aleatoriamente entre 1 e 10, com dicas dinâmicas e interações de voz para uma experiência mais imersiva.

## Funcionalidades

- **Interatividade via HTML e JavaScript:** O usuário pode digitar um palpite e receber feedback imediato.
- **Voz responsiva:** Utiliza a API do `responsiveVoice` para fornecer dicas em voz.
- **Sistema de validação e reinício:** Cada tentativa é contabilizada, e o jogo permite iniciar uma nova partida após acertar o número.
- **Evita repetições de números:** Um array rastreia os números já sorteados para maior variedade nas partidas.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- **`index.html`:** Define a estrutura do jogo e integra o JavaScript e o CSS.
- **`style.css`:** (não fornecido, mas responsável pelo estilo visual do jogo).
- **`app.js`:** Contém toda a lógica do jogo e as interações dinâmicas.
- **Imagem:** Inclui um arquivo `ia.png` utilizado na interface do jogo.

## Como Jogar

1. Abra o arquivo `index.html` em um navegador compatível.
2. Digite um número entre 1 e 10 no campo de entrada.
3. Clique em **Chutar** para verificar se o palpite está correto.
4. Receba dicas de "maior" ou "menor" até acertar o número.
5. Após vencer, clique em **Novo jogo** para recomeçar.

## Configuração e Execução

1. Certifique-se de que você tenha acesso a um navegador com suporte para JavaScript e para a API `responsiveVoice`.
2. Baixe ou clone o repositório para sua máquina local.
3. Certifique-se de que todos os arquivos estão na mesma pasta:
   - `index.html`
   - `style.css`
   - `app.js`
   - `img/ia.png`
4. Abra o arquivo `index.html` em qualquer navegador moderno.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização visual do projeto.
- **JavaScript:** Lógica do jogo e interação com o DOM.
- **API ResponsiveVoice:** Integração de voz para feedback auditivo.

## Melhorias Futuras

- Adicionar um modo difícil com um intervalo maior de números.
- Implementar um histórico de tentativas para maior engajamento do usuário.
- Estender suporte para diferentes idiomas além do português brasileiro.
- Criar um design responsivo para dispositivos móveis.
