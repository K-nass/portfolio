Portfolio Project
Overview

This project implements a simple dropdown menu with toggle functionality using JavaScript. The dropdown menu will be displayed when the menu button is clicked, and it will be hidden if the user clicks outside the dropdown or on the menu button again.
Features

    Toggle visibility of the dropdown menu when the menu button is clicked.

    Close the dropdown menu if the user clicks outside the menu or the button.

    Simple and intuitive navigation design.

File Structure

/project-root
  ├── assets/                # Folder for image or other media assets
  ├── cv/                    # Folder containing the CV-related documents
  ├── font-awesome/          # Folder for FontAwesome icons
  ├── style/                 # Folder for the project's stylesheets
  │   └── style.css          # Main CSS file for styling the dropdown menu and page
  ├── script.js              # JavaScript to toggle menu visibility
  ├── index.html             # Main HTML file
  ├── webfonts/              # Folder for web font files
  └── README.md              # Project documentation

Installation

To use this dropdown menu functionality, clone the repository or simply download the files. No server-side setup is required.

    Clone the repository:

    git clone https://github.com/K_nass/portfolio.git

    Open the index.html file in your browser to view the menu in action.

HTML Example

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Menu</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="font-awesome/css/all.css">
</head>
<body>

<nav>
    <button id="menu_icon">☰</button>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>

<script src="script.js"></script>
</body>
</html>

JavaScript Explanation

const dropDown = document.querySelector("nav ul");
const menuBtn = document.getElementById("menu_icon");

// Toggle the dropdown menu when the menu button is clicked
menuBtn.addEventListener("click", function() {
    dropDown.classList.toggle("show");
});

// Close the dropdown menu if clicked outside the menu or button
window.onclick = function(e) {
    if (!menuBtn.contains(e.target) && !dropDown.contains(e.target)) {
        dropDown.classList.remove("show");
    }
};

    menuBtn.addEventListener("click"): Toggles the show class to display or hide the dropdown menu when the button is clicked.

    window.onclick: Detects if a click happens outside of the menu or button and removes the show class to hide the menu.

CSS Styles

/* Basic styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

nav {
    background-color: #333;
    padding: 10px;
    position: relative;
}

nav ul {
    list-style: none;
    display: none; /* Initially hidden */
    position: absolute;
    top: 40px;
    right: 10px;
    background-color: #fff;
    padding: 0;
    margin: 0;
}

nav ul li {
    padding: 10px;
}

nav ul li a {
    color: #333;
    text-decoration: none;
    display: block;
}

nav ul.show {
    display: block; /* Show menu when "show" class is added */
}

#menu_icon {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    font-size: 24px;
    cursor: pointer;
}

CSS Explanation

    nav ul: Initially hidden by display: none, the menu becomes visible when the .show class is added to the ul element.

    nav ul.show: The display: block rule makes the dropdown menu visible when the button is clicked.

    #menu_icon: The menu button is styled with a background, padding, and icon representation.

How to Use

    Click the menu icon (☰) to open the dropdown.

    Click on any menu item to navigate (you can update the links in index.html as needed).

    Click anywhere outside the dropdown or the button to close the dropdown menu.
