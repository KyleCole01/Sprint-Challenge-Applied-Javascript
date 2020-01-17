// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement("div");
    const span1 = document.createElement("span");
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    header.append(span1);
    header.append(h1);
    header.append(span2);

    header.className = "header";
    span1.className = "date";
    span2.className = "temp";

    span1.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    span2.textContent = '98°'

    return header;
}
const root = document.querySelector('.header-container');
root.append(Header());
