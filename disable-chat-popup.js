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
  const toggleButtonSelector = 'div.sc-jRQBWg.nTava > div > div';

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
