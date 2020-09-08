<!DOCTYPE html>
<html>
  <head>
    <title>Boston Accent Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald&family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="all-content">
      <div class="main-content">
        <div class="image-area">
          <img src="images/hat.jpeg" class="image" />
          <img src="images/frappe.jpeg" class="image" />
          <img src="images/lobstah.jpeg" class="image" />
        </div>
        <h1 class="title">Boston Accent Generator</h1>
        <div id="input-area">
          <label for="input" id="question" class="section"
            >Enter a word or phrase to learn its Bostonian pronunciation:</label
          >
          <br />
          <input type="text" id="user-input" class="section" required />
          <button id="button" class="button" onclick="bostonify()">
            Enter
          </button>
        </div>
        <div id="output-area" class="section"></div>
        <div class="image-area">
          <img src="images/boat.jpeg" class="image" />
          <img src="images/sign.jpeg" class="image" />
          <img src="images/grindah.jpeg" class="image" />
        </div>
      </div>
      <footer>
        <p class="footer-text">© Claudia Robinson 2020</p>
      </footer>
    </div>
    <script src="app.js"></script>
  </body>
</html>
