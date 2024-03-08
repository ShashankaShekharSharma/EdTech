// Function to show content based on tab clicked
function showContent(contentType) {
  var professorsContent = document.getElementById('professors-content');
  var developersContent = document.getElementById('developers-content');
  var professorsTab = document.getElementById('professors-tab');
  var developersTab = document.getElementById('developers-tab');

  if (contentType === 'professors') {
      professorsContent.style.display = 'block';
      developersContent.style.display = 'none';
      professorsTab.classList.add('active');
      developersTab.classList.remove('active');
  } else if (contentType === 'developers') {
      professorsContent.style.display = 'none';
      developersContent.style.display = 'block';
      professorsTab.classList.remove('active');
      developersTab.classList.add('active');
  }
}

// Add event listeners to each card for hover effect
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('mouseenter', function() {
      this.classList.add('expanded');
  });
  card.addEventListener('mouseleave', function() {
      this.classList.remove('expanded');
  });
});
