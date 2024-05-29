

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



// document.addEventListener('mousemove', function(event) {
//   var dpItems = document.querySelectorAll('#dp-slider');
//   // Check if the cursor is on the left side of the screen
//   if (event.pageX < window.innerWidth / 2) {
//     // Apply the CSS styles to .dp-img img when the cursor is on the left side
//     dpItems.forEach(function(item) {
//       item.classList.add('left-hover');
//     });
//   } else {
//     // Remove the class if the cursor is not on the left side
//     dpItems.forEach(function(item) {
//       item.classList.remove('left-hover');
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  var dpNextButton = document.getElementById('dp-next');
  dpNextButton.addEventListener('mouseenter', function() {
    document.addEventListener('mousemove', dpMouseMoveHandler);
  });

  dpNextButton.addEventListener('mouseleave', function() {
    document.removeEventListener('mousemove', dpMouseMoveHandler);
    // Ensure that the 'left-hover' class is removed when mouse leaves the button
    var dpItems = document.querySelectorAll('#dp-slider');
    dpItems.forEach(function(item) {
      item.classList.remove('left-hover');
    });
  });
});

function dpMouseMoveHandler(event) {
  var dpItems = document.querySelectorAll('#dp-slider');
  // Check if the cursor is on the left side of the screen
  if (event.pageX < window.innerWidth / 2) {
    // Apply the CSS styles to .dp-img img when the cursor is on the left side
    dpItems.forEach(function(item) {
      item.classList.add('left-hover');
    });
  } else {
    // Remove the class if the cursor is not on the left side
    dpItems.forEach(function(item) {
      item.classList.remove('left-hover');
    });
  }
}

document.addEventListener('mousemove', function(event) {
  var dpItems = document.querySelectorAll('#dp-slider');
  // Check if the cursor is on the left side of the screen
  if (event.pageX < window.innerWidth / 2) {
    // Apply the CSS styles to .dp-img img when the cursor is on the left side
    dpItems.forEach(function(item) {
      item.classList.add('left-hover');
    });
  } else {
    // Remove the class if the cursor is not on the left side
    dpItems.forEach(function(item) {
      item.classList.remove('left-hover');
    });
  }
});

document.addEventListener('mousemove', function(event) {
  var dpItems = document.querySelectorAll('#dp-slider');
  // Check if the cursor is on the right side of the screen
  if (event.pageX > window.innerWidth / 2) {
    // Apply the CSS styles to .dp-img img when the cursor is on the right side
    dpItems.forEach(function(item) {
      item.classList.add('right-hover');
    });
  } else {
    // Remove the class if the cursor is not on the right side
    dpItems.forEach(function(item) {
      item.classList.remove('right-hover');
    });
  }
});