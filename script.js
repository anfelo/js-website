// function to run the webstie
const jsWebsite = () => {
  // create and select elements

  // html
  const htmlDoc = document.getElementsByTagName("html")[0];

  // head
  const head = document.head;
  const style = document.createElement("style");
  const searchLink = document.createElement("link");
  const styleLink = document.createElement("link");

  // body
  const body = document.body;
  const overlay = document.createElement("div");

  // header
  const header = document.createElement("header");
  const logoContainer = document.createElement("div");
  const logo = document.createElement("img");
  const headerRight = document.createElement("div");
  const searchContainer = document.createElement("div");
  const search = document.createElement("input");
  const searchIcon = document.createElement("span");
  const userContainer = document.createElement("div");
  const userIcon = document.createElement("i");
  const userMenuContainer = document.createElement("div");
  const userMenuArrow = document.createElement("div");
  const userMenuOptions = document.createElement("div");
  const userLoginContainer = document.createElement("div");
  const userLoginIcon = document.createElement("i");
  const userLogin = document.createElement("p");
  const userSettingsContainer = document.createElement("div");
  const userSettingsIcon = document.createElement("i");
  const userSettings = document.createElement("p");
  const userCartContainer = document.createElement("div");
  const userCartIcon = document.createElement("i");
  const userCart = document.createElement("p");

  // main
  const main = document.createElement("main");
  const mainContent = document.createElement("div");
  const sideMenu = document.createElement("div");
  const mainMenu = document.createElement("div");
  const ofertas = document.createElement("div");
  const footer = document.createElement("footer");
  const categoriesContainer = document.createElement("div");
  const icons = document.createElement("div");
  const icon1 = document.createElement("i");
  const icon2 = document.createElement("i");
  const icon3 = document.createElement("i");
  const icon4 = document.createElement("i");
  const icon5 = document.createElement("i");
  const icon6 = document.createElement("i");
  const icon7 = document.createElement("i");
  const categories = document.createElement("ul");
  const categoriesItem1 = document.createElement("li");
  const categoriesItem2 = document.createElement("li");
  const categoriesItem3 = document.createElement("li");
  const categoriesItem4 = document.createElement("li");
  const categoriesItem5 = document.createElement("li");
  const categoriesItem6 = document.createElement("li");
  const categoriesItem7 = document.createElement("li");

  // html function
  const htmlElement = () => {
    // add styles
    htmlDoc.style.fontFamily = "Open Sans, sans-serif";
    htmlDoc.style.boxSizing = "border-box";
  };
  htmlElement();

  // head function
  const headElement = () => {
    // append elements
    head.append(searchLink);
    head.append(style);
    head.append(styleLink);

    // innerHTML
    style.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');`;

    // add styles
    searchLink.rel = "stylesheet";
    searchLink.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200";
    styleLink.rel = "stylesheet";
    styleLink.href = "style.css";
  };
  headElement();

  // body function
  const bodyElement = () => {
    // append elements
    body.append(overlay);
    body.append(header);
    body.append(main);

    // add styles
    body.style.margin = "0";
    overlay.style.position = "absolute";
    overlay.style.zIndex = "99";
    overlay.style.top = "0";
    overlay.style.right = "0";
    overlay.style.left = "0";
    overlay.style.bottom = "0";
    overlay.style.backgroundColor = "transparent";
    overlay.style.display = "none";

    // add eventListeners
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      userMenuContainer.style.display = "none";
    });
  };
  bodyElement();

  // header function
  const headerElement = () => {
    // append elements
    header.append(logoContainer);
    header.append(headerRight);
    header.append(userMenuContainer);
    headerRight.append(searchContainer);
    headerRight.append(userContainer);
    searchContainer.append(search);
    logoContainer.append(logo);
    searchContainer.append(searchIcon);
    userContainer.append(userIcon);
    userMenuContainer.append(userMenuArrow);
    userMenuContainer.append(userMenuOptions);
    userMenuOptions.append(userLoginContainer);
    userLoginContainer.append(userLoginIcon);
    userLoginContainer.append(userLogin);
    userMenuOptions.append(userSettingsContainer);
    userSettingsContainer.append(userSettingsIcon);
    userSettingsContainer.append(userSettings);
    userMenuOptions.append(userCartContainer);
    userCartContainer.append(userCartIcon);
    userCartContainer.append(userCart);

    // innerHTML
    searchIcon.innerHTML = "search";
    userLogin.innerHTML = "Login";
    userSettings.innerHTML = "Settings";
    userCart.innerHTML = "Shopping Cart";

    // add styles
    header.style.position = "relative";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.width = "80%";
    header.style.margin = "0 auto 50px";

    // h1

    // logo
    logoContainer.style.width = "200px";
    logo.src = "images/eat_well.png";
    logo.style.maxWidth = "100%";
    logo.style.height = "auto";

    // headerRight
    headerRight.style.display = "flex";
    headerRight.style.justifyContent = "space-between";
    headerRight.style.alignItems = "center";

    // search
    searchContainer.style.display = "flex";
    searchContainer.style.alignItems = "stetch";
    search.type = "text";
    search.placeholder = "what do you want to eat today?";
    search.style.width = "220px";
    search.style.height = "30px";
    search.style.border = "3px solid green";
    search.style.borderRadius = "5px 0 0 5px";
    search.style.outline = "none";
    search.style.padding = "5px";
    search.style.fontSize = ".9rem";
    searchIcon.classList.add("material-symbols-outlined");
    searchIcon.style.color = "white";
    searchIcon.style.fontSize = "40px";
    searchIcon.style.backgroundColor = "green";
    searchIcon.style.textAlign = "center";
    searchIcon.style.borderRight = "2px solid green";
    searchIcon.style.borderRadius = "0 5px 5px 0";
    searchIcon.style.cursor = "pointer";
    searchIcon.style.display = "flex";
    searchIcon.style.justifyContent = "center";
    searchIcon.style.alignItems = "center";

    // user
    userContainer.style.marginLeft = "50px";
    userContainer.style.borderRadius = "5px";
    userContainer.style.position = "relative";
    userContainer.style.width = "70px";
    userContainer.style.height = "70px";
    userContainer.style.display = "flex";
    userContainer.style.justifyContent = "center";
    userContainer.style.alignItems = "center";
    userContainer.style.cursor = "pointer";
    userContainer.style.zIndex = "999";
    userIcon.style.color = "cadetblue";
    userMenuContainer.style.position = "absolute";
    userMenuContainer.style.backgroundColor = "#404040";
    userMenuContainer.style.width = "250px";
    userMenuContainer.style.top = "130px";
    userMenuContainer.style.right = "10px";
    userMenuContainer.style.borderRadius = "3px";
    userMenuContainer.style.zIndex = "999";
    userMenuContainer.style.display = "none";
    userMenuArrow.style.backgroundColor = "#404040";
    userMenuArrow.style.position = "absolute";
    userMenuArrow.style.right = "15px";
    userMenuArrow.style.top = "-4px";
    userMenuArrow.style.width = "15px";
    userMenuArrow.style.height = "15px";
    userMenuArrow.style.transform = "rotate(-45deg)";
    userMenuOptions.style.padding = "10px";
    userLoginContainer.style.display = "flex";
    userLoginContainer.style.alignItems = "center";
    userLoginContainer.style.cursor = "pointer";
    userLoginContainer.style.margin = "5px 0";
    userLoginContainer.style.borderRadius = "5px";
    userLoginIcon.style.color = "white";
    userLoginIcon.style.margin = "0 10px";
    userLogin.href = "#";
    userLogin.style.textDecoration = "none";
    userLogin.style.color = "white";
    userLogin.style.fontWeight = "500";
    userSettingsContainer.style.display = "flex";
    userSettingsContainer.style.alignItems = "center";
    userSettingsContainer.style.cursor = "pointer";
    userSettingsContainer.style.margin = "5px 0";
    userSettingsContainer.style.borderRadius = "5px";
    userSettingsIcon.style.color = "white";
    userSettingsIcon.style.margin = "0 10px";
    userSettings.href = "#";
    userSettings.style.textDecoration = "none";
    userSettings.style.color = "white";
    userSettings.style.fontWeight = "500";
    userCartContainer.style.display = "flex";
    userCartContainer.style.alignItems = "center";
    userCartContainer.style.cursor = "pointer";
    userCartContainer.style.margin = "5px 0";
    userCartContainer.style.borderRadius = "5px";
    userCartIcon.style.color = "white";
    userCartIcon.style.margin = "0 10px";
    userCart.href = "#";
    userCart.style.textDecoration = "none";
    userCart.style.color = "white";
    userCart.style.fontWeight = "500";

    // eventListeners
    const eventListeners = () => {
      // hover interaction for user background
      userContainer.addEventListener("mouseover", () => {
        userContainer.style.backgroundColor = "whitesmoke";
        userContainer.style.transition = "background-color .2s ease-in-out";
      });

      userContainer.addEventListener("mouseout", () => {
        userContainer.style.backgroundColor = "initial";
        userContainer.style.transition = "background-color .2s ease-in-out";
      });

      // hover interaction for user info background inside the modal
      userLoginContainer.addEventListener("mouseover", () => {
        userLoginContainer.style.backgroundColor = "#595959";
      });

      userLoginContainer.addEventListener("mouseout", () => {
        userLoginContainer.style.backgroundColor = "initial";
      });

      userSettingsContainer.addEventListener("mouseover", () => {
        userSettingsContainer.style.backgroundColor = "#595959";
        userSettingsIcon.style.transform = "rotate(75deg)";
        userSettingsIcon.style.transition = "transform .2s ease-in-out";
      });

      userSettingsContainer.addEventListener("mouseout", () => {
        userSettingsContainer.style.backgroundColor = "initial";
        userSettingsIcon.style.transform = "rotate(-75deg)";
      });

      userCartContainer.addEventListener("mouseover", () => {
        userCartContainer.style.backgroundColor = "#595959";
      });

      userCartContainer.addEventListener("mouseout", () => {
        userCartContainer.style.backgroundColor = "initial";
      });

      // hover interaction for userSettingsIcon

      // click interaction
      userContainer.addEventListener("click", () => {
        if (userMenuContainer.style.display === "block") {
          overlay.style.display = "none";
          userMenuContainer.style.display = "none";
        } else {
          overlay.style.display = "block";
          userMenuContainer.style.display = "block";
        }
      });
    };
    eventListeners();

    // add classes
    userIcon.classList.add("fa-solid", "fa-user", "fa-3x");
    userLoginIcon.classList.add(
      "fa-solid",
      "fa-arrow-right-to-bracket",
      "fa-lg"
    );
    userSettingsIcon.classList.add("fa-solid", "fa-gear", "fa-lg");
    userCartIcon.classList.add("fa-solid", "fa-cart-shopping");
  };
  headerElement();

  // main function
  const mainElement = () => {
    // append elements
    main.append(mainContent);
    mainContent.append(sideMenu);
    mainContent.append(mainMenu);
    mainContent.append(ofertas);
    mainContent.append(footer);

    // add styles
    mainContent.style.display = "grid";
    mainContent.style.gridTemplateColumns = "200px repeat(2, 1fr)";
    mainContent.style.gridTemplateRows = "repeat(3, 1fr) 100px";
    mainContent.style.gridTemplateAreas = `'sideMenu mainMenu mainMenu' 'sideMenu mainMenu mainMenu' 'sideMenu ofertas ofertas' 'sideMenu footer footer'`;
    mainContent.style.width = "90%";
    mainContent.style.margin = "auto";
    mainContent.style.height = "700px";
  };
  mainElement();

  // sideMenu function
  const sideMenuElement = () => {
    // append elements
    sideMenu.append(categoriesContainer);
    categoriesContainer.append(icons);
    icons.append(icon1, icon2, icon3, icon4, icon5, icon6, icon7);
    categoriesContainer.append(categories);
    categories.append(
      categoriesItem1,
      categoriesItem2,
      categoriesItem3,
      categoriesItem4,
      categoriesItem5,
      categoriesItem6,
      categoriesItem7
    );

    // innerHTML
    const categoriesItemsLabels = [
      "Vegetables",
      "Fruits",
      "Bakery",
      "Meats",
      "Nuts & Spices",
      "Dairy",
      "Wine",
    ];
    const categoriesItems = [
      categoriesItem1,
      categoriesItem2,
      categoriesItem3,
      categoriesItem4,
      categoriesItem5,
      categoriesItem6,
      categoriesItem7,
    ];

    categoriesItems.forEach((item, index) => {
      item.innerHTML = categoriesItemsLabels[index];
    });

    // add styles
    sideMenu.style.gridArea = "sideMenu";
    sideMenu.style.marginRight = "10px";
    sideMenu.style.display = "flex";
    sideMenu.style.justifyContent = "flex-start";
    sideMenu.style.alignItems = "center";
    icons.style.height = "100%";
    icons.style.display = "flex";
    icons.style.flexDirection = "column";
    icons.style.justifyContent = "center";
    icons.style.alignItems = "center";
    icons.style.padding = "0";
    icons.style.display = "flex";
    icons.style.flexDirection = "column";
    icons.style.justifyContent = "space-around";
    icons.style.height = "80%";
    icons.style.margin = "0 10px";
    icon1.style.color = "seaGreen";
    icon2.style.color = "seaGreen";
    icon3.style.color = "seaGreen";
    icon4.style.color = "seaGreen";
    icon5.style.color = "seaGreen";
    icon6.style.color = "seaGreen";
    icon7.style.color = "seaGreen";
    categoriesContainer.style.height = "100%";
    categoriesContainer.style.display = "flex";
    categoriesContainer.style.flexDirection = "row";
    categoriesContainer.style.justifyContent = "center";
    categoriesContainer.style.alignItems = "center";
    categories.style.padding = "0";
    categories.style.display = "flex";
    categories.style.flexDirection = "column";
    categories.style.justifyContent = "space-around";
    categories.style.height = "80%";

    // style the list elements in sideMenu
    let liArray = document.querySelectorAll("li");

    liArray.forEach((li) => {
      li.style.listStyle = "none";
      li.style.color = "seaGreen";
      li.style.fontWeight = "500";
      li.style.cursor = "pointer";

      // hover interaction
      li.addEventListener("mouseover", () => {
        li.style.color = "darkGreen";
        li.style.textDecoration = "underline";
        li.style.transition = "color .3s ease-in-out";
      });

      li.addEventListener("mouseout", () => {
        li.style.color = "seaGreen";
        li.style.textDecoration = "none";
      });
    });

    // add classes
    icon1.classList.add("fa-solid", "fa-carrot", "fa-lg");
    icon2.classList.add("fa-solid", "fa-apple-whole", "fa-lg");
    icon3.classList.add("fa-solid", "fa-bread-slice", "fa-lg");
    icon4.classList.add("fa-solid", "fa-bacon", "fa-lg");
    icon5.classList.add("fa-solid", "fa-pepper-hot", "fa-lg");
    icon6.classList.add("fa-solid", "fa-cheese", "fa-lg");
    icon7.classList.add("fa-solid", "fa-wine-bottle", "fa-lg");
  };
  sideMenuElement();

  // mainMenu function
  const mainMenuElement = () => {
    // add styles
    mainMenu.style.gridArea = "mainMenu";
    mainMenu.style.backgroundColor = "orange";
    mainMenu.style.marginBottom = "10px";
  };
  mainMenuElement();

  // ofertas function
  const ofertasElement = () => {
    // add styles
    ofertas.style.gridArea = "ofertas";
    ofertas.style.backgroundColor = "gray";
    ofertas.style.marginBottom = "10px";
  };
  ofertasElement();

  // footer function
  const footerElement = () => {
    // add atyles
    footer.style.gridArea = "footer";
    footer.style.backgroundColor = "seaGreen";
  };
  footerElement();

  // testing stuff with console.log
  const consoleLogs = () => {
    console.log(body);
    console.log(userMenuArrow.style.cssText);
  };
  consoleLogs();
};

jsWebsite();
