document.addEventListener('keydown', function(event) {
  if (event.altKey && event.key === 'h') {
    window.open(location.href, "detab", "toolbar=0"); //location.href = current page
  }
});
