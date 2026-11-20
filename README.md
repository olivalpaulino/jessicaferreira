# 🏋️‍♀️ Site Landing Page - Jéssica Ferreira | Coach RitBox

Site moderno, responsivo e de alta conversão desenvolvido para a profissional de Educação Física **Jéssica Ferreira**, especialista no método de treino e emagrecimento **RitBox** (Digital e Presencial).

> **Desenvolvido por:** Olival Paulino  
> **Contato / WhatsApp:** (82) 98210-7078  
> **Cliente:** Jéssica Ferreira - (82) 98184-7421  
> **Instagram:** [@jessicaferreirarit](https://www.instagram.com/jessicaferreirarit/)  
> **YouTube:** [@jessicaferreirarit](https://www.youtube.com/@jessicaferreirarit)

---

## 🎨 Paleta de Cores e Identidade Visual
O design segue rigorosamente a identidade visual e as cores oficiais:
- ⬛ **Preto Premium** (`#0A0A0C`, `#121216`): Fundo e superfícies sofisticadas.
- 🟨 **Amarelo Energético Ritbox** (`#FFE600`, `#FFD000`): Destaques principais, botões de ação e ritmo.
- 🟥 **Vermelho Intenso** (`#FF2A3B`): Paixão, queima calórica e intensidade.
- ⬜ **Branco Puro** (`#FFFFFF`): Tipografia limpa de alta legibilidade.

---

## 📱 Estrutura e Seções do Site
1. **Header Fixo Responsivo:** Com efeito glassmorphism ao rolar e menu lateral tipo *drawer* para smartphones.
2. **Hero Section (Início):** Headline de impacto sobre emagrecimento com Ritbox, contadores animados (+500 alunas, até 1000 kcal, 100% energia), botões de CTA e foto em moldura neon.
3. **O Método RitBox:** Explicação clara de por que o método supera academias tradicionais (sem tédio, funcional + ritmo, alta queima).
4. **Sobre a Jéssica Ferreira:** Apresentação da treinadora, credenciamento oficial, botões para Instagram e YouTube.
5. **Conheça o Meu Trabalho (Vídeo Shorts Vertical 9:16):**
   - Mockup de celular moderno em proporção vertical 9:16.
   - **Autoplay automático ao rolar:** O vídeo inicia automaticamente quando a aluna rola até essa seção.
   - **Botão de Som:** Inicia mutado (como exigem Chrome, Safari e Android) e possui um botão de 1 clique para *"Ativar Ritmo (Áudio) 🔊"*.
6. **Desafios & Programas:**
   - Desafio 21 Dias Seca Ritbox (card em destaque).
   - RitBox Digital Online (treine de qualquer lugar).
   - Turmas Presenciais & Personal.
7. **Prova Social & Resultados:** Antes e depois ilustrado com métricas de perda de peso e depoimentos reais de alunas avaliados com 5 estrelas.
8. **Dúvidas Frequentes (FAQ):** Perguntas e respostas em acordeon dinâmico.
9. **Contato & Chamada Final:** Botões diretos para WhatsApp, Instagram e YouTube.
10. **Rodapé Profissional:** Links rápidos e crédito destacado: **"Desenvolvido por Olival Paulino"** com link direto para o seu WhatsApp.
11. **Botão Flutuante de WhatsApp:** Fixo no canto inferior direito com animação de pulso.

---

## 🛠️ Como Personalizar o MVP (Passo a Passo para o Olival)

### 1. Como colocar o vídeo Shorts do YouTube da Jéssica:
Você pode configurar de duas formas fáceis:

**Opção A (Direto no HTML):**
Abra o arquivo `index.html`, procure pela linha do player:
```html
<div id="youtube-shorts-player" data-video-id="SEU_ID_AQUI"></div>
```
Substitua `dQw4w9WgXcQ` pelo código final do vídeo do Shorts da Jéssica.  
*Exemplo:* se o link for `https://www.youtube.com/shorts/5e_0p_f786E`, o ID é apenas `5e_0p_f786E`.

**Opção B (No arquivo JS):**
Abra `js/main.js` e altere a primeira constante:
```javascript
const YOUTUBE_SHORTS_CONFIG = {
  videoId: '5e_0p_f786E', // coloque aqui o ID
  autoplayOnScroll: true
};
```

### 2. Como trocar as imagens/fotos pelas fotos oficiais da Jéssica:
1. Salve as fotos reais da Jéssica na pasta `assets/images/` (por exemplo: `jessica-foto.jpg`).
2. No `index.html`, procure por `assets/images/jessica-hero.svg` e altere para `assets/images/jessica-foto.jpg`.
3. Para as fotos de antes e depois na seção de resultados, faça o mesmo substituindo `transformation-1.svg` pelas fotos reais das alunas.

### 3. Como testar no seu computador:
Basta dar **duplo clique no arquivo `index.html`** no Windows para abrir em qualquer navegador (Chrome, Edge, Firefox, Brave).

---

## 🚀 Como Colocar o Site no Ar (Hospedagem Gratuita)
Você pode hospedar este site de forma 100% gratuita e com certificado SSL (HTTPS) seguro em menos de 2 minutos usando:
- **Vercel** (`vercel.com`) -> basta arrastar a pasta do projeto.
- **Netlify Drop** (`app.netlify.com/drop`) -> basta arrastar a pasta `jessicaferreira`.
- **GitHub Pages** -> crie um repositório e ative o Pages nas configurações.
