document.addEventListener('DOMContentLoaded', function () {
  const donationForm = document.querySelector('.donation-form');
  if (donationForm) {
    donationForm.onsubmit = function(event) {
      var amount = document.getElementById('amount').value;

      if (amount <= 0) {
        alert("Please enter a valid donation amount.");
        event.preventDefault(); 
      }
    };

    donationForm.addEventListener('submit', function(event) {
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }
});

document.querySelectorAll('.filter-buttons button').forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.filter-buttons button').forEach(b => b.classList.remove('active'));
    this.classList.add('active'); // Add 'active' class to clicked button
    
    var filter = this.getAttribute('data-filter'); // Get the filter value
    var cards = document.querySelectorAll('.project-card'); // Get all project cards
    var sections = document.querySelectorAll('.section-title'); // Get all section titles
    
    // Iterate over each section title and its associated project grid
    sections.forEach(function(section) {
      var sectionId = section.nextElementSibling; // The div that contains the project cards
      
      if (sectionId && sectionId.classList.contains('project-grid')) {
        var cardsInSection = sectionId.querySelectorAll('.project-card'); // Cards inside this section
        
        let shouldHide = true;
        // Check if at least one card in the section should be shown
        cardsInSection.forEach(function(card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            shouldHide = false;
          }
        });

        if (shouldHide) {
          section.classList.add('hidden'); // Hide section title if no cards match the filter
        } else {
          section.classList.remove('hidden'); // Show section title if at least one card matches the filter
        }
      }
    });

    cards.forEach(function(card) {
      // Remove the 'hidden' class from all cards first
      card.classList.remove('hidden');
      
      // If the card's category matches the filter (or if "all" is selected), show it
      if (filter !== "all" && card.getAttribute('data-category') !== filter) {
        card.classList.add('hidden'); // Hide the card
      }
    });
  });
});

  
  
  
  
  
  