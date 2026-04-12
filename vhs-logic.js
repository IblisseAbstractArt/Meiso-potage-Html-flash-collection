// vhs-logic.js - El cerebro de los filtros

document.addEventListener("DOMContentLoaded", function() {
    // Actualiza esta sección en tu vhs-logic.js
const svgHTML = `
<svg style="display: none;">
  <filter id="retro-lite">
    <feOffset in="SourceGraphic" dx="3" dy="0" result="red-p"/>
    <feColorMatrix in="red-p" type="matrix" values="1.2 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r"/>
    
    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1.2 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/>
    
    <feOffset in="SourceGraphic" dx="-3" dy="0" result="blue-p"/>
    <feColorMatrix in="blue-p" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1.2 0 0  0 0 0 1 0" result="b"/>
    
    <feBlend mode="screen" in="r" in2="g" result="rg"/>
    <feBlend mode="screen" in="rg" in2="b" result="rgb"/>

    <feGaussianBlur in="rgb" stdDeviation="0.8" result="soft-glow"/>
    <feBlend mode="screen" in="rgb" in2="soft-glow" result="neon-output"/>

    <feTurbulence type="fractalNoise" baseFrequency="0.01 50" numOctaves="1" result="noise">
        <animate attributeName="seed" from="1" to="100" dur="2s" repeatCount="indefinite" />
    </feTurbulence>
    <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 10 -8" />
    <feComposite in2="neon-output" operator="over"/>
  </filter>

  </svg>`;

    // Inicializar el contenedor en modo Lite
    const container = document.getElementById('flash-container');
    if (container) {
        container.style.filter = 'url(#retro-lite)';
    }
});

let isFull = false;
function toggleRetro() {
    const container = document.getElementById('flash-container');
    const btn = document.getElementById('perf-btn');
    if (!container || !btn) return;

    isFull = !isFull;
    if (isFull) {
        container.style.filter = 'url(#retro-full)';
        btn.innerText = '[ MODE: VHS FULL ]';
        btn.style.color = '#ff5555';
        btn.style.borderColor = '#ff5555';
    } else {
        container.style.filter = 'url(#retro-lite)';
        btn.innerText = '[ MODE: VHS LITE ]';
        btn.style.color = '#55ff55';
        btn.style.borderColor = '#333';
    }
}
