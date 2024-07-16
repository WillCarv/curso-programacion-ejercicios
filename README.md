# Ejercicio 1

## Descripción
Este ejercicio consiste en crear una página web simple.

## Código
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <title>Frontend Mentor | Notifications page</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>

  <section class="main">

    <div class="notifications">
      <h3 class="title">Notifications <span class="number" id="number">3</span></h3>
      <p class="mark" id="mark-all">Mark all as read</p>
    </div>
    <div class="post">
      <img class="image" src="./assets/images/avatar-mark-webber.webp" alt="">
        <div> 
          <p>
            <span class="name">Mark Webber</span> 
            <span>reacted to your recent post</span> 
            <span class="reaction">My first tournament today!</span>
            <span class="not-read"></span> 
          </p>
          <p class="time"> 1m ago</p>
        </div>
    </div>

    <div class="post">
      <img class="image" src="/assets/images/avatar-angela-gray.webp" alt="">
        <div> 
          <p>
            <span class="name">Angela Gray</span> 
            <span>followed you</span> 
            <span class="status not-read"></span> 
          </p>
          <p class="time"> 5m ago</p>
        </div>
    </div>

    <div class="post">
      <img class="image" src="./assets/images/avatar-jacob-thompson.webp" alt="">
        <div> 
          <p>
            <span class="name">Jacob Thompson</span> 
            <span> has joined your group</span> 
            <span class="group">Chess Club</span>
            <span class="status not-read"></span> 
          </p>
          <p class="time"> 1 day ago</p>
        </div>
    </div>

    <div class="post">
      <img class="image" src="./assets/images/avatar-rizky-hasanuddin.webp" alt="">
        <div> 
          <p>
            <span class="name">Rizky Hasanuddin</span> 
            <span> sent you a private message</span> 
            <span class="status"></span> 
          </p>
          <p class="time">5 days ago</p>
          <div class="message-container">
            <p class="message">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
              I'm already having lots of fun and improving my game.</p>
          </div>
        </div>
    </div>

    <div class="post">
      <img class="image" src="./assets/images/avatar-kimberly-smith.webp" alt="">
        <div> 
          <p>
            <span class="name">Kimberly Smith</span> 
            <span> commented on your picture</span> 
          </p>
          <span class=""></span> 
          <p class="time"> 1 week ago</p>
        </div>
        <img class="picture" src="./assets/images/image-chess.webp" alt="">
    </div>

    <div class="post">
      <img class="image" src="./assets/images/avatar-nathan-peterson.webp" alt="">
        <div> 
          <p>
            <span class="name">Nathan Peterson</span> 
            <span> reacted to your recent post</span> 
            <span class="reaction">5 end-game strategies to increase your win rate</span>
          </p>
          <p class="time"> 2 weeks ago</p>
        </div>
    </div>

    <div class="post">
      <img class="image" src="./assets/images/avatar-anna-kim.webp" alt="">
        <div> 
          <p>
            <span class="name"> Anna Kim</span> 
            <span> left the group</span> 
            <span class="group">Chess Club</span>
            <span class="status"></span> 
          </p>
          <p class="time"> 2 weeks ago</p>
        </div>
    </div>

  </section>
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/WillCarv" target="_blank">William Carvajal</a>.
  </div>
  <script src="./main.js"></script>
</body>
</html>

