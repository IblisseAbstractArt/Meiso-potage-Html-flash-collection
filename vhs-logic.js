// vhs-logic.js - El cerebro de los filtros

document.addEventListener("DOMContentLoaded", function() {
    // Inyectamos los filtros SVG al final del body para que existan en la página
    const svgHTML = `
    <svg style="display: none;">
      <filter id="retro-lite">
        <feOffset in="SourceGraphic" dx="2" dy="0" result="red-p"/><feColorMatrix in="red-p" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r"/><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/><feOffset in="SourceGraphic" dx="-2" dy="0" result="blue-p"/><feColorMatrix in="blue-p" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b"/><feBlend mode="screen" in="r" in2="g" result="rg"/><feBlend mode="screen" in="rg" in2="b" result="rgb"/><feTurbulence type="fractalNoise" baseFrequency="0.01 50" numOctaves="1" result="noise"><animate attributeName="seed" from="1" to="100" dur="2s" repeatCount="indefinite" /></feTurbulence><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 10 -8" /><feComposite in2="rgb" operator="over"/>
      </filter>
      <filter id="retro-full">
        <feOffset in="SourceGraphic" dx="2" dy="0" result="red-p"/><feColorMatrix in="red-p" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r"/><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/><feOffset in="SourceGraphic" dx="-2" dy="0" result="blue-p"/><feColorMatrix in="blue-p" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b"/><feBlend mode="screen" in="r" in2="g" result="rg"/><feBlend mode="screen" in="rg" in2="b" result="rgb"/><feGaussianBlur in="rgb" stdDeviation="2" result="g-blur"/><feOffset in="g-blur" dx="3" result="g-off"/><feComponentTransfer in="g-off" result="g-fade"><feFuncA type="linear" slope="0.3"/></feComponentTransfer><feBlend mode="screen" in="rgb" in2="g-fade" result="ghost"/><feTurbulence type="fractalNoise" baseFrequency="0.001 0.15" numOctaves="1" result="t-noise"><animate attributeName="seed" from="1" to="100" dur="1s" repeatCount="indefinite" /></feTurbulence><feDisplacementMap in="ghost" in2="t-noise" scale="8" xChannelSelector="R" result="distort"/><feGaussianBlur in="distort" stdDeviation="1.5" result="b-blur"/><feBlend mode="screen" in="distort" in2="b-blur" result="bloom"/><feTurbulence type="fractalNoise" baseFrequency="0.01 50" numOctaves="1" result="l-noise"><animate attributeName="seed" from="1" to="100" dur="1.5s" repeatCount="indefinite" /></feTurbulence><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 10 -8" result="lines"/><feComposite in="lines" in2="bloom" operator="over"/>
      </filter>
    </svg>`;
    document.body.insertAdjacentHTML('beforeend', svgHTML);

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
