// function to run the webstie
const jsWebsite = () => {

  // create and select elements 
    
    // html 
    const html = document.getElementsByTagName('html')[0];

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
      const h1 = document.createElement('h1');
      const searchContainer = document.createElement('div');
      const search = document.createElement('input');
      const searchIcon = document.createElement('span');

      // main
      const main = document.createElement('main');
      const mainContent = document.createElement('div');
      const sideMenu = document.createElement('div');
      const mainMenu = document.createElement('div');
      const ofertas = document.createElement('div');
      const footer = document.createElement('footer');


  // testing stuff with console.log
  const consoleLogs = () => {
    console.log(html)
  }
  consoleLogs();


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
    header.append(searchContainer);
    searchContainer.append(search);
    logoContainer.append(logo);
    searchContainer.append(searchIcon);

    // main
    main.append(mainContent);
    mainContent.append(sideMenu);
    mainContent.append(mainMenu);
    mainContent.append(ofertas);
    mainContent.append(footer);

  }
  appendElements();


  // write inside the elements
  const writeHtml = () => {

    // head
    style.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');`;

    // header
    searchIcon.innerHTML = 'search';
    h1.innerHTML = 'Welcome to our market!';

  }
  writeHtml();


  // website styles
  const styles = () => {

    // html 
    html.style.fontFamily = 'Open Sans, sans-serif';
    html.style.boxSizing = 'border-box';

    // head
    searchLink.rel = 'stylesheet';
    searchLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200';
    styleLink.rel = 'stylesheet';
    styleLink.href = 'style.css';

    // body
    body.style.margin = 0;

    // header
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.width = '80%';
    header.style.margin = '0 auto 50px';

      // h1
      h1.style.textAlign = 'center';
      h1.style.color = '#ff6600';
      h1.style.textDecoration = 'underline';

      // logo
      logoContainer.style.width = '200px';
      logo.src = 'images/eat_well.png'
      logo.style.maxWidth = '100%';
      logo.style.height = 'auto';

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

    // main

      // mainContent
      mainContent.style.display = 'grid';
      mainContent.style.gridTemplateAreas = `'sideMenu mainMenu mainMenu' 'sideMenu mainMenu mainMenu' 'sideMenu ofertas ofertas' 'sideMenu footer footer'`;
      mainContent.style.width = '90%';
      mainContent.style.margin = 'auto';
      mainContent.style.height = '700px';
      sideMenu.style.gridArea = 'sideMenu';
      sideMenu.style.backgroundColor = 'blue';
      sideMenu.style.marginRight = '10px';
      mainMenu.style.gridArea = 'mainMenu';
      mainMenu.style.backgroundColor = 'orange';
      mainMenu.style.marginBottom = '10px';
      ofertas.style.gridArea = 'ofertas';
      ofertas.style.backgroundColor = 'gray';
      ofertas.style.marginBottom = '10px';
      footer.style.gridArea = 'footer';
      footer.style.backgroundColor = 'seaGreen';


  }
  styles();

}

jsWebsite();