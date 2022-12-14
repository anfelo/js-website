// HeaderComponent
const logoComponent = () => {
  return `
    <div class="logo-container">
      <img src="images/eat_well.png" />
    </div>
  `;
}

const headerComponent = () => {
  return `
    <header>
      ${logoComponent()}
      <div class="header-right">
        ${searchComponent()}
        ${userComponent()}
      </div>
    </header>
  `;
};

// SearchComponent
const searchComponent = () => {
  return `
    <div class="search-container">
      <input type="text" placeholder="what do you want to eat today?" />
      <span class="icon material-symbols-outlined">search</span>
    </div>
  `;
};

// UserComponent
const userComponent = () => {
  return `
    <div class="user-container">
      <i class="fa-solid fa-user fa-3x"></i>
    </div>
  `;
};

// SidebarComponent
const sidebarComponent = () => {
  return `
    <aside>
      ${categoriesComponent()}
    </aside>
  `;
};

// MainComponent
const mainComponent = () => {
  return `
    <main>
      ${sidebarComponent()}
    </main>
  `;
};

// CategoriesComponent
const categories = [
  { label: "Vegetables", icon: "fa-carrot" },
  { label: "Fruits", icon: "fa-apple-whole" },
  { label: "Bakery", icon: "fa-bread-slice" },
  { label: "Meats", icon: "fa-bacon" },
  { label: "Nuts & Spices", icon: "fa-pepper-hot" },
  { label: "Dairy", icon: "fa-cheese" },
  { label: "Wine", icon: "fa-wine-bottle" },
];

const categoriesComponent = () => {
  const cats = categories.map(c => {
    return `
      <li class="category-item">
        <i class="fa-solid fa-lg ${c.icon}"></i>
        <span>${c.label}</span>
      </li>
    `;
  });


  return `
    <ul class="categories-container">
      ${cats.join('')}
    </ul>
  `;
};

document.body.innerHTML = `
${headerComponent()}
${mainComponent()}
`
