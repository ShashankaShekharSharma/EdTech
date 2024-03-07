function showContent(content) {
  // Hide all content sections
  var contents = document.querySelectorAll('.content');
  contents.forEach(function(contentElement) {
      contentElement.style.display = 'none';
  });

  // Deactivate all tab buttons
  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function(tabButton) {
      tabButton.classList.remove('active');
  });

  // Show selected content and activate corresponding tab button
  var selectedContent = document.getElementById(content + '-content');
  selectedContent.style.display = 'block';
  var selectedTabButton = document.getElementById(content + '-tab');
  selectedTabButton.classList.add('active');
}
