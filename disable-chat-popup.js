//FUNCTION TO CUSTOMIZE POPUP CHAT
function toggleDivVisibility(targetDiv, toggleButton) {
  targetDiv.style.display = 'none';

  toggleButton.addEventListener('click', () => {
    if (targetDiv.style.display === 'none') {
      targetDiv.style.display = 'block';
    } else {
      targetDiv.style.display = 'none';
    }
  });
}

function initObserver() {
  const targetDivSelector = 'div.sc-gsDKAQ.bRVohJ';
  const toggleButtonSelector = 'div.sc-hKwDye.hWATBB > div > div';

  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const targetDiv = document.querySelector(targetDivSelector);
        const toggleButton = document.querySelector(toggleButtonSelector);

        if (targetDiv && toggleButton) {
          toggleDivVisibility(targetDiv, toggleButton);
          observer.disconnect(); // Disconnect the observer once the elements are found and processed
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', initObserver);


//FUNCTION TO REPLACE BOOK YOUR RIDE BUTTON TO CALL NOW AS PER PAGESIZE
function replaceLink() {
  // Select the anchor element with class "btn btn-danger display-5" and href="book-a-ride.html"
  var replacelink = document.querySelector('a.btn.btn-danger.display-5[href="book-a-ride.html"]');

  // Check if the window width is less than or equal to 500px
  if (window.innerWidth <= 500 && replacelink.textContent === 'Book Your Ride') {
    // Update the href value to "tel:+18554210671"
    replacelink.href = 'tel:+18554210671';

    // Update the text content to "Call Now"
    replacelink.textContent = 'Call Now';
  }

  // Check if the window width is greater than 500px
  if (window.innerWidth > 500 && replacelink.textContent === 'Call Now') {
    // Update the href value to "book-a-ride.html"
    replacelink.href = 'book-a-ride.html';

    // Update the text content to "Book Your Ride"
    replacelink.textContent = 'Book Your Ride';
  }
}

// Call the function when the window loads and when it's resized
window.addEventListener('load', replaceLink);
window.addEventListener('resize', replaceLink);


//FUNCTION TO REPLACE BRAND TEXT
function replaceBrandText() {
  var brandLink = document.querySelector('a.brand-link');
  if (brandLink.textContent = 'Safe Designated Drivers') {
    brandLink.textContent = 'Safe Designated Driver'
  }
}
replaceBrandText(); // call the function to execute it
