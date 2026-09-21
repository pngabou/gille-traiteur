(() => {
  const WHATSAPP_NUMBER = '+33 7 64 05 57 76';
  const digits = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const waLink = 'https://wa.me/' + digits;

  document.querySelectorAll('[data-wa-link]').forEach((el) => {
    el.href = waLink;
  });

  document.querySelectorAll('[data-wa-display]').forEach((el) => {
    el.textContent = WHATSAPP_NUMBER;
  });

  const form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = (field) => {
        const el = form.elements[field];
        return (el && el.value.trim()) || '—';
      };
      const message =
        'Bonjour Gilles, demande de devis.\n' +
        'Nom : ' + value('name') + '\n' +
        'Contact : ' + value('contact') + '\n' +
        'Date : ' + value('date') + '\n' +
        'Convives : ' + value('guests') + '\n' +
        'Projet : ' + value('project');
      window.open(waLink + '?text=' + encodeURIComponent(message), '_blank');
    });
  }
})();
