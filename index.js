
document.getElementById('Showall').onclick = function() {
   alert("Its For u ! ");
    var hiddenDiv = document.getElementById('Hiden');
    // Change the display property to 'block' to reveal the hidden div
    hiddenDiv.style.display = 'block';
    hiddenDiv.style.display = 'flex';
  };

  document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cardContainer = document.getElementById('cardContainer');
    const navbar = document.querySelector('.navbar');

    // Initially hide the card container
    cardContainer.style.display = 'none';

    // Event listener for the cart icon
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.addEventListener('click', function() {
        if (cardContainer.style.display === 'none') {
            // Show the card container and navbar
            cardContainer.style.display = 'block';
            navbar.style.display = 'flex';
            // Hide other elements
            hideOtherElements();
        } else {
            // Hide the card container
            cardContainer.style.display = 'none';
        }
    });

    // Function to hide other elements
    function hideOtherElements() {
        const elementsToHide = document.querySelectorAll('.main > *:not(.navbar):not(#cardContainer)');
        elementsToHide.forEach(element => {
            element.style.display = 'none';
        });
    }

    // Event listener for adding items to the cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const clonedCard = card.cloneNode(true);
            cardContainer.appendChild(clonedCard);
            // Add event listener for removing the card
            const removeButton = clonedCard.querySelector('.remove-from-cart');
            removeButton.addEventListener('click', function() {
                clonedCard.remove();
            });
        });
    });
});

 
