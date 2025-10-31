// Function to hide sponsored results
function hideSponsored() {
  // Find all elements that contain "Sponsored" text
  const sponsoredElements = document.querySelectorAll('[aria-label*="Sponsored"]');
  
  sponsoredElements.forEach(el => {
    // Hide the entire search result container
    const container = el.closest('div[data-sokoban-container]') || 
                      el.closest('div[jscontroller]') ||
                      el.closest('.uEierd');
    if (container) {
      container.style.display = 'none';
    }
  });

  // Also check for elements with "Sponsored" text visible
  const allDivs = document.querySelectorAll('div');
  allDivs.forEach(div => {
    if (div.textContent.includes('Sponsored') && 
        div.offsetHeight < 50 && 
        div.offsetHeight > 0) {
      const parent = div.closest('div[data-sokoban-container]') ||
                     div.closest('.uEierd');
      if (parent) {
        parent.style.display = 'none';
      }
    }
  });

  // Handle shopping ads at the top
  const shoppingAds = document.querySelectorAll('.pla-unit, .commercial-unit-desktop-top');
  shoppingAds.forEach(ad => ad.style.display = 'none');
}

// Run immediately
hideSponsored();

// Watch for dynamic content changes
const observer = new MutationObserver(() => {
  hideSponsored();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('NoMoreSponsors: Active.');