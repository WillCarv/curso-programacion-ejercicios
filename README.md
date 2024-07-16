# Ejercicio 3

## Descripcion

## Codigo  


# Ejercicio 2

## Descripción
En este ejercicio desarrollé mis habilidades para el aprendizaje de TailWind CSS, HTML y JavaScript, además de la creación de componentes en React.

## Código
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Intro section with dropdown navigation</title>
  <link rel="stylesheet" href="./styles.css">

</head>
<body>
  <header>
    <img src="./images/logo.svg" alt="logo">
    <img id="hamburger-menu" class="hamburger-menu" src="./images/icon-menu.svg" alt="icon menu">
    <nav id="navbar">
      <div class="back"></div>
        <div class="front">
          <div class="close-img-container">
            <img id="close-btn" src="./images/icon-close-menu.svg" alt="icon close">
          </div>
          <ul>
            <li class="features-ul-container">
              <button id="features-btn" class="submenu-btn">
                Features 
                <img  id="features-btn-arrow" src="./images/icon-arrow-down.svg" alt="arrow down icon"> </button> 
              <ul id="features-ul" class="features-ul">
                <li>
                  <img src="./images/icon-todo.svg" alt="List icon">
                  <span>Todo List</span>
                </li>
                <li>
                  <img src="./images/icon-calendar.svg" alt="Calendar icon">
                  <span>Calendar</span>
                </li>
                <li>
                  <img src="./images/icon-reminders.svg" alt="Reminders icon">
                  <span>Reminders</span>
                </li>
                <li>
                  <img src="images/icon-planning.svg" alt="planning icon">
                  <span>Planning</span>
                </li>
              </ul> 
            </li>
            <li class="company-ul-container">
              <button id="company-btn" class="submenu-btn">
                Company 
                <img id="company-btn-arrow" src="./images/icon-arrow-down.svg" alt=""></button> 
              <ul id="company-ul" class="company-ul">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div class="btns-container">
            <button class="login-btn">Login</button>
            <button class="register-btn">Register</button>
          </div>
        </div>
    </nav>
  </header>

  <main>
    <section>
      <h2>Make remote work</h2>
      <p>Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.</p>
      <button>Learn more</button>
      <div class="logos-container">
        <img class="databiz" src="images/client-databiz.svg" alt="databiz logo">
        <img class="audio" src="images/client-audiophile.svg" alt="audiophile logo">
        <img class="meet" src="images/client-meet.svg" alt="meet logo">
        <img class="maker" src="images/client-maker.svg" alt="maker logo">
      </div>
    </section>
    <picture>
      <source 
      srcset="./images/image-hero-mobile.png" 
      media="(max-width: 1023px)" 
      />
      <source 
      srcset="./images/image-hero-desktop.png" 
      media="(min-width:1024px)"
      />
      <img class="hero-image" src="./images/image-hero-mobile.png" alt="Hero image">
    </picture>
  </main>
  <script src="./main.js">

  </script>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/WillCarv" target="_blank">William Carvajal</a>.
  </div>
</body>
</html>
