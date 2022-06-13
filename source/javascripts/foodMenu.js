// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items array
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  ,
  {
    id: 10,
    title: "steak",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// select section-center that its the parent for items
const sectionCenter = document.querySelector(".section-center");
// console.log(sectionCenter);
// target container
const container = document.querySelector(".btn-container");
// sice we have s list we use querySelectorAll

// loead items listen for the DOM content event, and add callback fucntion
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// this function is looking for the array
function displayMenuItems(menuItems) {
  // now what i wnat to do? iterate over the items and display
  //   console.log("shake and bake ");
  //   in order to filter item when click button we need to put it in a function
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    // after display we need to join them
    return `
      <article class="menu-item">
        <img src=${item.img} alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>  
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>
    `;
  });
  //   we joined them to have a one string
  displayMenu = displayMenu.join("");
  //   console.log(displayMenu);
  // now we add it as part of the data
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    //   in the reduce we have two parameters acumulator and current
    function (values, item) {
      // if values (array) that i return  does not include the item category
      // then values Array add that iten category
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  // console.log(categories);
  // setup buttons ,need setup as string
  const categoryBtns = categories
    .map(function (category) {
      return `
      <button class="filter-btn" type="button" data-id=${category}>
        ${category}
      </button>
      `;
    })
    // setup as string and then target the cointainer class btn-container
    .join("");
  // add the buttons
  container.innerHTML = categoryBtns;
  // console.log(categoryBtns);
  // select the buttons once we added dynamicly to the DOM then target them and add the even lister
  //  for each and evrybutton
  // ? we selected the buttons after we added dynamicly to the DOM not before
  const filterBtns = container.querySelectorAll(".filter-btn");
  // console.log(filterBtns);
  // filter items over it run forEach and have callback function btn as a parameter
  // for all 4 button add addEventListener
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //   console.log data set so in the html get tje data like this (data-wherever name)
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      // use a filter method so filter out what items are left in the new array so filter the array
      // dependening on what is the value fro mu category
      const menuCategory = menu.filter(function (menuItem) {
        //   console.log(menuItem.category);
        // if the item matches wherever i have in the category
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      //   console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
