// CoreLink ICT - Analytics & Event Tracking
// Lightweight, privacy-friendly tracker (HTML-only compatible)
// Replace MEASUREMENT_ID with your GA4 ID when ready

(function(){
  const GA_ID = 'G-XXXXXXXXXX'; // <-- replace after site goes live

  // Load Google Analytics
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_ID, {
    anonymize_ip: true,
    page_title: document.title,
    page_location: window.location.href
  });

  // Track WhatsApp clicks
  document.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(a && a.href && a.href.includes('wa.me')){
      gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: a.href
      });
    }
  });

  // Track service request form submit
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', function(){
      gtag('event', 'service_request', {
        event_category: 'conversion',
        event_label: 'Service Request Form'
      });
    });
  }
})();
