

// step 1: get all the buttons which contain the specified class
const accorditionButtons = document.querySelectorAll('.accordition-btn');

// step 2: adding the forEach() high order array method to the previously declared constant
accorditionButtons.forEach(button => { // iterates throught every button in the node list and runs the code for each of them, the button variable represents the current button in the loop
// step 3: add the click event listener 
    button.addEventListener('click', () => {
// step 4: declare the variables which are influenced by the event listener, in this case the icons and description
        const description = button.nextElementSibling; // selects the element thats right after the button element in the html
        const plusIcon = button.querySelector('.plus-icon'); // selects the icon inside the button
        const minusIcon = button.querySelector('.minus-icon');
// step 5: use the toggle method to add the show class on the description element, to control whether it is visible or not
        description.classList.toggle('show'); // adds or removes the show element from the description div
// step 6: declare the isVisible constant which checks whether the 'show' class is present
        const isVisible = description.classList.contains('show'); // returns the appropriate boolean value depending on t if the element currently has the 'show' class applied
// step 7: use ternary operators to check if the isVisible constant is true, controling which icon is shown
        plusIcon.style.display = isVisible ? 'none' : 'block'; // if isVisible returns true, meaning the element has the 'show' class, hide the pluss icon, else show it
        minusIcon.style.display = isVisible ? 'block' : 'none'; // the opposite
    })
})





