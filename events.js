// alert

var event = new Event("build");

// despachamos

// Disparar event.

setTimeout(() => {
  window.dispatchEvent(event);
}, 2000);
