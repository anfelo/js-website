// function to run the webstie
const jsWebsite = () => {

  // create and select elements 
    
    // html 
    const htmlDoc = document.getElementsByTagName('html')[0];

    // head
    const head = document.head;
    const style = document.createElement('style');
    const searchLink = document.createElement('link');
    const styleLink = document.createElement('link');

    // body
    const body = document.body;

      // header
      const header = document.createElement('header');
      const logoContainer = document.createElement('div');
      const logo = document.createElement('img');
      const headerRight = document.createElement('div');
      const searchContainer = document.createElement('div');
      const search = document.createElement('input');
      const searchIcon = document.createElement('span');
      const userContainer = document.createElement('div');
      const userIcon = document.createElement('i');
      const userMenuContainer = document.createElement('div');
      const userMenuArrow = document.createElement('div');
      const userMenuOptions = document.createElement('div');
      const userLogin = document.createElement('p');


      // main
      const main = document.createElement('main');
      const mainContent = document.createElement('div');
      const sideMenu = document.createElement('div');
      const mainMenu = document.createElement('div');
      const ofertas = document.createElement('div');
      const footer = document.createElement('footer');
      const categoriesContainer = document.createElement('div'); 
      const icons = document.createElement('div');
      const icon1 = document.createElement('i');
      const icon2 = document.createElement('i');
      const icon3 = document.createElement('i');
      const icon4 = document.createElement('i');
      const icon5 = document.createElement('i');
      const icon6 = document.createElement('i');
      const icon7 = document.createElement('i');
      const categories = document.createElement('ul');
      const categoriesItem1 = document.createElement('li');
      const categoriesItem2 = document.createElement('li');
      const categoriesItem3 = document.createElement('li');
      const categoriesItem4 = document.createElement('li');
      const categoriesItem5 = document.createElement('li');
      const categoriesItem6 = document.createElement('li');
      const categoriesItem7 = document.createElement('li');


  // append elements
  const appendElements = () => {

    // head
    head.append(searchLink);
    head.append(style);
    head.append(styleLink);

    // body
    body.append(header);
    body.append(main);

    // header
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
    userMenuOptions.append(userLogin);

    // main
    main.append(mainContent);
    mainContent.append(sideMenu);
    mainContent.append(mainMenu);
    mainContent.append(ofertas);
    mainContent.append(footer);
    sideMenu.append(categoriesContainer);
    categoriesContainer.append(icons);
    icons.append(icon1, icon2, icon3, icon4, icon5, icon6, icon7);
    categoriesContainer.append(categories);
    categories.append(categoriesItem1, categoriesItem2, categoriesItem3, categoriesItem4, categoriesItem5, categoriesItem6, categoriesItem7);
    

  }
  appendElements();


  // write inside the elements
  const writeHtml = () => {

    // head
    style.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');`;

    // header
    searchIcon.innerHTML = 'search';
    userLogin.innerHTML = 'Login';
    
    // sideMenu list elements 
    categoriesItem1.innerHTML = 'Vegetables';
    categoriesItem2.innerHTML = 'Fruits';
    categoriesItem3.innerHTML = 'Bakery';
    categoriesItem4.innerHTML = 'Meats';
    categoriesItem5.innerHTML = 'Nuts & Spices';
    categoriesItem6.innerHTML = 'Dairy';
    categoriesItem7.innerHTML = 'Wine';

  }
  writeHtml();


  // website styles
  const styles = () => {

    // html 
    htmlDoc.style.fontFamily = 'Open Sans, sans-serif';
    htmlDoc.style.boxSizing = 'border-box';

    // head
    searchLink.rel = 'stylesheet';
    searchLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200';
    styleLink.rel = 'stylesheet';
    styleLink.href = 'style.css';

    // body
    body.style.margin = 0;

    // header
    header.style.position = 'relative';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.width = '80%';
    header.style.margin = '0 auto 50px';

      // h1

      // logo
      logoContainer.style.width = '200px';
      logo.src = 'images/eat_well.png'
      logo.style.maxWidth = '100%';
      logo.style.height = 'auto';

      // headerRight
      headerRight.style.display = 'flex';
      headerRight.style.justifyContent = 'space-between';
      headerRight.style.alignItems = 'center';

      // search
      searchContainer.style.display = 'flex';
      searchContainer.style.alignItems = 'stetch';
      search.type = 'text';
      search.placeholder = 'what do you want to eat today?'
      search.style.width = '220px';
      search.style.height = '30px';
      search.style.border = '3px solid green';
      search.style.borderRadius = '5px 0 0 5px';
      search.style.outline = 'none';
      search.style.padding = '5px';
      search.style.fontSize = '.9rem';
      searchIcon.classList.add('material-symbols-outlined');
      searchIcon.style.color = 'white';
      searchIcon.style.fontSize = '40px';
      searchIcon.style.backgroundColor = 'green';
      searchIcon.style.textAlign = 'center';
      searchIcon.style.borderRight = '2px solid green';
      searchIcon.style.borderRadius = '0 5px 5px 0';
      searchIcon.style.cursor = 'pointer';
      searchIcon.style.display = 'flex';
      searchIcon.style.justifyContent = 'center';
      searchIcon.style.alignItems = 'center';

      // user
      userContainer.style.marginLeft = '50px';
      userContainer.style.borderRadius = '5px';
      userContainer.style.position = 'relative';
      userContainer.style.width = '70px';
      userContainer.style.height = '70px';
      userContainer.style.display = 'flex';
      userContainer.style.justifyContent = 'center';
      userContainer.style.alignItems = 'center';
      userContainer.style.cursor = 'pointer';
      userIcon.style.color = 'cadetblue';
      userMenuContainer.style.position = 'absolute';
      userMenuContainer.style.backgroundColor = 'gray';
      userMenuContainer.style.width = '250px';
      userMenuContainer.style.top = '120px';
      userMenuContainer.style.right = '20px';
      userMenuArrow.style.backgroundColor = 'gray';
      userMenuArrow.style.position = 'absolute';
      userMenuArrow.style.right = '10px';
      userMenuArrow.style.top = '-5px';
      userMenuArrow.style.width = '15px';
      userMenuArrow.style.height = '15px';
      userMenuArrow.style.transform = 'rotate(-45deg)'

        // hover interaction
        userContainer.addEventListener('mouseover', () => {
          userContainer.style.backgroundColor = 'whitesmoke';
          userContainer.style.transition = 'background-color .2s ease-in-out';
        });

        userContainer.addEventListener('mouseout', () => {
          userContainer.style.backgroundColor = 'initial';
          userContainer.style.transition = 'background-color .2s ease-in-out';
        });

    // main

      // mainContent
      mainContent.style.display = 'grid';
      mainContent.style.gridTemplateColumns = '200px repeat(2, 1fr)';
      mainContent.style.gridTemplateRows = 'repeat(3, 1fr) 100px';
      mainContent.style.gridTemplateAreas = `'sideMenu mainMenu mainMenu' 'sideMenu mainMenu mainMenu' 'sideMenu ofertas ofertas' 'sideMenu footer footer'`;
      mainContent.style.width = '90%';
      mainContent.style.margin = 'auto';
      mainContent.style.height = '700px';
      sideMenu.style.gridArea = 'sideMenu';
      sideMenu.style.marginRight = '10px';
      sideMenu.style.display = 'flex';
      sideMenu.style.justifyContent = 'flex-start';
      sideMenu.style.alignItems = 'center';
      mainMenu.style.gridArea = 'mainMenu';
      mainMenu.style.backgroundColor = 'orange';
      mainMenu.style.marginBottom = '10px';
      ofertas.style.gridArea = 'ofertas';
      ofertas.style.backgroundColor = 'gray';
      ofertas.style.marginBottom = '10px';
      footer.style.gridArea = 'footer';
      footer.style.backgroundColor = 'seaGreen';
      icons.style.height = '100%';
      icons.style.display = 'flex';
      icons.style.flexDirection = 'column';
      icons.style.justifyContent = 'center';
      icons.style.alignItems = 'center';
      categoriesContainer.style.height = '100%';
      categoriesContainer.style.display = 'flex';
      categoriesContainer.style.flexDirection = 'row';
      categoriesContainer.style.justifyContent = 'center';
      categoriesContainer.style.alignItems = 'center';
      icons.style.padding = '0';
      icons.style.display = 'flex';
      icons.style.flexDirection = 'column';
      icons.style.justifyContent = 'space-around';
      icons.style.height = '80%';
      icons.style.margin = '0 10px';
      icon1.style.color = 'seaGreen';
      icon2.style.color = 'seaGreen';
      icon3.style.color = 'seaGreen';
      icon4.style.color = 'seaGreen';
      icon5.style.color = 'seaGreen';
      icon6.style.color = 'seaGreen';
      icon7.style.color = 'seaGreen';
      categories.style.padding = '0';
      categories.style.display = 'flex';
      categories.style.flexDirection = 'column';
      categories.style.justifyContent = 'space-around';
      categories.style.height = '80%';

        // style the list elements in side Menu
        let liArray = document.querySelectorAll('li');

        liArray.forEach(li => {
          li.style.listStyle = 'none';
          li.style.color = 'seaGreen';
          li.style.fontWeight = '500';
          li.style.cursor = 'pointer';

          // hover interaction
          li.addEventListener('mouseover', () => {
            li.style.color = 'darkGreen';
            li.style.textDecoration = 'underline';
            li.style.transition = 'color .3s ease-in-out';
          });

          li.addEventListener('mouseout', () => {
            li.style.color = 'seaGreen';
            li.style.textDecoration = 'none';
          });
        });

      
      // add classes
      const addClasses = () => {

        // create classes (preguntar a pipe). CONTINUAR AQUI
        const isRed = `background-color: red;`;
        userMenuArrow.style.cssText += isRed;
        
        // user
        userIcon.classList.add('fa-solid', 'fa-user', 'fa-3x');

        // icons
        icon1.classList.add('fa-solid', 'fa-carrot', 'fa-lg');
        icon2.classList.add('fa-solid', 'fa-apple-whole', 'fa-lg');
        icon3.classList.add('fa-solid', 'fa-bread-slice', 'fa-lg');
        icon4.classList.add('fa-solid', 'fa-bacon', 'fa-lg');
        icon5.classList.add('fa-solid', 'fa-pepper-hot', 'fa-lg');
        icon6.classList.add('fa-solid', 'fa-cheese', 'fa-lg');
        icon7.classList.add('fa-solid', 'fa-wine-bottle', 'fa-lg');

      }
      addClasses();

  }
  styles();

  
  // testing stuff with console.log
  const consoleLogs = () => {
    console.log(body)
    console.log(userMenuArrow.style.cssText)
  }
  consoleLogs();

}

jsWebsite();