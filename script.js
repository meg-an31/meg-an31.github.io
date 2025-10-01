// Custom tooltip functionality
function createTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.textContent = text;
  tooltip.style.cssText = `
    position: absolute;
    background-color: rgb(30, 30, 40);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
    z-index: 1000;
    border: 1px solid rgb(70, 70, 80);
    pointer-events: none;
  `;
  
  document.body.appendChild(tooltip);
  
  element.addEventListener('mouseenter', () => {
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
  });
  
  element.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  });
}

// Example usage:
// createTooltip(document.querySelector('.my-link'), 'Custom tooltip text!');
