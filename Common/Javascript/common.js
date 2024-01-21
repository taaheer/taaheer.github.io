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
        loadHTML('https://raw.githubusercontent.com/taaheer/taaheer.github.io/main/Common/Html/common-header.html', 'header');
        loadHTML('https://raw.githubusercontent.com/taaheer/taaheer.github.io/main/Common/Html/common-footer.html', 'footer');
      };