/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// step 1 - write the function

function createMenu(menuItem) {
  const wrapper = document.createElement('div');
  wrapper.classList.add("menu");
  const ul = document.createElement('ul');
  
  // append ul to the div

  wrapper.appendChild(ul);


  // step 2 - iterate over the array creating as many list items as items there are in the array

  const listItems = menuItem.map( item => {
    const li = document.createElement('li')
    li.textContent = item;
    return li;
  });

  // step 2 - add list items to the ul element

  listItems.forEach( item => {
    ul.appendChild(item);
  });

  // step 3 - select menu button html element
  const menuButton = document.querySelector(".menu-button");
  
  // step 4 - toggle class on menu class element
  menuButton.addEventListener('click', e => {
    wrapper.classList.toggle("menu--open");
  })

  return wrapper;
};

const newMenu = createMenu(menuItems);
const header = document.querySelector(".header")
header.appendChild(newMenu);
