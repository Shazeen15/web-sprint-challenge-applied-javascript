// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container');
console.log(headerContainer);

function Header() {
    const header = document.createElement('div');
    const spanDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement('span');

    header.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    header.appendChild(spanDate);
    header.appendChild(h1);
    header.appendChild(spanTemp);

    // spanDate.textContent = 'working'

    return header;
}
// console.log(headerContainer.appendChild(Header()));
headerContainer.appendChild(Header());