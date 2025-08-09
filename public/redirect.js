// Redirect script to handle old asset paths
(function() {
  // Check if we're on the old path and redirect
  if (window.location.pathname.includes('/BAI-Website/')) {
    var newPath = window.location.pathname.replace('/BAI-Website/', '/');
    window.location.replace(newPath);
  }
  
  // Force reload of assets if they're cached
  var links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(function(link) {
    if (link.href.includes('/BAI-Website/')) {
      link.href = link.href.replace('/BAI-Website/', '/');
    }
  });
  
  var scripts = document.querySelectorAll('script[src]');
  scripts.forEach(function(script) {
    if (script.src.includes('/BAI-Website/')) {
      script.src = script.src.replace('/BAI-Website/', '/');
    }
  });
})(); 