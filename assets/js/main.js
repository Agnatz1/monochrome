// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Исправление для YCLIENTS: открываем именно твой виджет
const widgetUrl = "https://n1756917.yclients.com";

function openYClientsWidget() {
  window.open(widgetUrl, "_blank");
}

document.getElementById("openWidget")?.addEventListener("click", e => {
  e.preventDefault();
  if (window.YCWidget && window.YCWidget.open) {
    YCWidget.open();
  } else {
    openYClientsWidget(); // Для тех, у кого виджет не загрузился
  }
});
document.getElementById("openWidgetHero")?.addEventListener("click", e => {
  e.preventDefault();
  if (window.YCWidget && window.YCWidget.open) {
    YCWidget.open();
  } else {
    openYClientsWidget(); // Для тех, у кого виджет не загрузился
  }
});
