    // Function to load HTML content
    function loadHTML(url, targetSelector) {
        fetch(url)
          .then(response => response.text())
          .then(html => {
            const targetElement = document.querySelector(targetSelector);
            targetElement.innerHTML += html; // Append instead of replacing
          })
          .catch(error => console.error('Error loading HTML:', error));
      }
  
      // Load header and footer
      window.onload = function() {
        loadHTML('Common/Html/common-header.html', 'header');
        loadHTML('Common/Html/common-footer.html', 'footer');
      };