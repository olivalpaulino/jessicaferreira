/**
 * ==========================================================================
 * LANDING PAGE JÉSSICA FERREIRA - COACH RITBOX DIGITAL & PRESENCIAL
 * Desenvolvido por: Olival Paulino (WhatsApp: 82 98210-7078)
 * ==========================================================================
 * 
 * GUIA RÁPIDO PARA O OLIVAL:
 * - Para trocar o vídeo do YouTube Shorts, altere a constante YOUTUBE_SHORTS_ID abaixo!
 * - Exemplo de link de Shorts: https://www.youtube.com/shorts/5e_0p_f786E
 *   O ID é a parte final: 5e_0p_f786E
 * ==========================================================================
 */

// 👉 COLOQUE AQUI O ID DO VÍDEO SHORTS DO YOUTUBE DA JÉSSICA:
const YOUTUBE_SHORTS_CONFIG = {
  // Substitua este ID pelo ID do vídeo do Shorts oficial da Jéssica:
  videoId: 'dQw4w9WgXcQ', // ID de demonstração (coloque o ID real aqui)
  autoplayOnScroll: true
};

let ytShortsPlayer = null;
let isPlayerReady = false;
let isAudioMuted = true;

/* ==========================================================================
   1. INICIALIZAÇÃO DA YOUTUBE IFRAME API
   ========================================================================== */
// Carrega o script da YouTube API de forma assíncrona
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Função chamada automaticamente pelo YouTube quando a API estiver pronta
window.onYouTubeIframeAPIReady = function() {
  const container = document.getElementById('youtube-shorts-player');
  if (!container) return;

  // Permite sobrescrever o ID diretamente pelo atributo data-video-id no HTML
  const customVideoId = container.getAttribute('data-video-id') || YOUTUBE_SHORTS_CONFIG.videoId;

  ytShortsPlayer = new YT.Player('youtube-shorts-player', {
    videoId: customVideoId,
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      loop: 1,
      playlist: customVideoId, // Necessário para looping no YouTube
      playsinline: 1,          // Importante para celular (iOS/Android não abrir tela cheia forçada)
      mute: 1                  // Inicia mudo para permitir autoplay sem bloqueio do navegador
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
};

function onPlayerReady(event) {
  isPlayerReady = true;
  // Garante que o som inicial esteja mudo para que os navegadores permitam o autoplay ao rolar
  event.target.mute();
  setupIntersectionAutoplay();
}

function onPlayerStateChange(event) {
  const statusPill = document.getElementById('shorts-status-text');
  if (!statusPill) return;

  if (event.data === YT.PlayerState.PLAYING) {
    statusPill.textContent = 'Treinando Agora 🔥';
  } else if (event.data === YT.PlayerState.PAUSED) {
    statusPill.textContent = 'Pausado';
  }
}

/* ==========================================================================
   2. AUTOPLAY AO ROLAR ATÉ A SEÇÃO (INTERSECTION OBSERVER)
   ========================================================================== */
function setupIntersectionAutoplay() {
  const shortsSection = document.getElementById('conheca-trabalho');
  if (!shortsSection || !isPlayerReady) return;

  const observerOptions = {
    root: null,
    threshold: 0.35 // Ativa quando 35% do card estiver visível na tela do celular/computador
  };

  const shortsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Entrou na tela: Inicia a reprodução automática
        if (ytShortsPlayer && typeof ytShortsPlayer.playVideo === 'function') {
          ytShortsPlayer.playVideo();
        }
      } else {
        // Saiu da tela: Pausa o vídeo para não gastar dados nem bateria do usuário
        if (ytShortsPlayer && typeof ytShortsPlayer.pauseVideo === 'function') {
          ytShortsPlayer.pauseVideo();
        }
      }
    });
  }, observerOptions);

  shortsObserver.observe(shortsSection);
}

/* ==========================================================================
   3. CONTROLE DE ÁUDIO CUSTOMIZADO (DESMUTAR / MUTAR)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const audioToggleBtn = document.getElementById('btn-toggle-audio');
  
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      if (!ytShortsPlayer || !isPlayerReady) return;

      if (isAudioMuted) {
        ytShortsPlayer.unMute();
        ytShortsPlayer.setVolume(100);
        isAudioMuted = false;
        audioToggleBtn.classList.add('is-unmuted');
        audioToggleBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          Som Ativado! 🔊
        `;
      } else {
        ytShortsPlayer.mute();
        isAudioMuted = true;
        audioToggleBtn.classList.remove('is-unmuted');
        audioToggleBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          Ativar Ritmo (Áudio) 🔊
        `;
      }
    });
  }

  /* ==========================================================================
     4. HEADER SCROLL & NAVEGAÇÃO SUAVE
     ========================================================================== */
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ==========================================================================
     5. MENU MOBILE DRAWER
     ========================================================================== */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* ==========================================================================
     6. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Abre ou fecha o item clicado
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });

  /* ==========================================================================
     7. ANIMAÇÃO DE NÚMEROS NOS STATS (COUNT UP)
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target') || '0', 10);
            const prefix = stat.getAttribute('data-prefix') || '';
            const suffix = stat.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 1800; // ms
            const step = Math.ceil(target / (duration / 25));

            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              stat.textContent = `${prefix}${current}${suffix}`;
            }, 25);
          });
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }
});
