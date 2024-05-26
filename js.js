

function toggleActive(button) {
    var buttons = document.getElementsByClassName('btn');
    
    // Remove 'active' class from all buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Show/hide div elements based on the active class of buttons
    const cardDiv = document.getElementById('card');
    const gridDiv = document.getElementById('grid');

    if (button.classList.contains('cardview')) {
      cardDiv.classList.remove('hidden');
      gridDiv.classList.add('hidden');
    } else if (button.classList.contains('gridview')) {
      cardDiv.classList.add('hidden');
      gridDiv.classList.remove('hidden');
    }
  }


// =================slider=================

